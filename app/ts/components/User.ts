import {Component} from 'angular2/core';

@Component({
    selector: 'user',
    template: (`
        <div class="user" (click)="expandUser()">
            <img [src]="avatar" class="user__avatar">
            <div class="user__name">Dmitry Dorofeev</div>
            <div class="user__menu" [ngClass]="{user__menu_expanded: expanded}">
                <div class="user__menu-item">
                    Settings
                </div>
                <div class="user__menu-item user__menu-item_last" (click)="logout()">
                    Logout
                </div>
            </div>
        </div>
    `)
})
export class User {
    expanded: boolean = false;
    avatar: string = 'https://pp.vk.me/c627723/v627723616/325e8/e-UXHJcNq_Y.jpg';

    logout(): void {
        alert('logout');
    }

    expandUser(): void {
        this.expanded = !this.expanded;
    }
}
