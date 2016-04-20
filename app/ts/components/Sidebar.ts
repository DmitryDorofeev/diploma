import {
  Component,
  OnInit,
} from 'angular2/core';
import { TreeView } from './TreeView';
import {ThreadsService} from '../services/services';
import {Thread} from '../models';

@Component({
  directives: [TreeView],
  selector: 'sidebar',
  template: `
    <div class="sidebar">
      <tree-view></tree-view>
    </div>
  `
})
export class Sidebar implements OnInit {
  thread: Thread;
  selected: boolean = false;

  constructor(public threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });
  }
}
