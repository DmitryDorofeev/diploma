import {
  Component,
  OnInit,
} from 'angular2/core';
import {ThreadsService} from '../services/services';
import {Thread} from '../models';

@Component({
  inputs: [],
  selector: 'sidebar',
  template: `
    <div class="sidebar">
      
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
