import {Component} from 'angular2/core';

interface Node {
    title: string;
    id: number;
    childs: Node[];
}

@Component({
    selector: 'element',
    inputs: ['node'],
    directives: [Element],
    template: `
        <div class="tree-view__element">
            <div class="tree-view__title">{{ node.title }}</div>
            <div class="tree-view__childs" *ngFor="#child of node.childs">
                <element [node]="child"></element>
            </div>
        </div>
    `
})
class Element {
    node: Node;
}

@Component({
    selector: 'tree-view',
    directives: [Element],
    template: `
        <div>
            <element [node]="root"></element>
        </div>
    `
})
export class TreeView {
    root: Node;

    constructor() {
        this.root = {
            title: 'РКК Энергия',
            id: 1,
            childs: [
                {
                    title: 'Город Королёв',
                    id: 2,
                    childs: []
                },
                {
                    title: 'Город Хуелёв',
                    id: 3,
                    childs: []
                }
            ]
        }
    }
}