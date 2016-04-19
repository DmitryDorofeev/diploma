import {Component} from 'angular2/core';
import {SearchService} from '../services/SearchService';

@Component({
    selector: 'search',
    template: `
        <form action="" class="search" (submit)="onSubmit()">
            <input type="search" [(ngModel)]="value" name="search" class="search__input">
            <button type="submit" class="search__button">Search</button>
        </form>
    `
})
export class Search {
    value: string;

    constructor(searchService: SearchService) {
        console.log(searchService.sasay());
    }

    onSubmit(): void {
        console.log('ba', this.value);
    }
}
