import {Component} from 'angular2/core';
import {Device} from '../models';

@Component({
    selector: 'list',
    inputs: ['items'],
    template: (`
        <div class="list">
            <div class="list__item" *ngFor="#item of items">
                {{item.title}}
            </div>
        </div>
    `)
})
export class List {
    items: Device;
}
