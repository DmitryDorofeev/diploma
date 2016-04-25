import {Component} from 'angular2/core';
import {List} from './List';
import {Device} from '../models';

@Component({
  selector: 'content',
  directives: [List],
  template: (`
    <div class="content">
         <list [items]="items"></list>
    </div>
`)
})
export class Content {
  items: Device[] = [{title: 'Item 1'}, {title: 'Item 2'}];
}
