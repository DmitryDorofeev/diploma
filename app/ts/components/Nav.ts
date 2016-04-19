import {Component, OnInit} from 'angular2/core';
import {Search} from './Search';
import {SearchService} from '../services/SearchService';
import {MessagesService, ThreadsService} from '../services/services';
import {Message, Thread} from '../models';
import * as _ from 'underscore';

@Component({
    selector: 'nav',
    directives: [Search],
    template: `
      <nav class="nav">
        <div class="nav__title">
            IPDB
        </div>
        <div class="nav__search">
            <search></search>
        </div>
      </nav>
  `,
    providers: [SearchService]
})
export class Nav implements OnInit {
    unreadMessagesCount:number;

    constructor(public messagesService: MessagesService,
                public threadsService: ThreadsService) {
    }

    ngOnInit():void {
        this.messagesService.messages
            .combineLatest(
                this.threadsService.currentThread,
                (messages: Message[], currentThread: Thread) =>
                    [currentThread, messages])

            .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
                this.unreadMessagesCount =
                    _.reduce(
                        messages,
                        (sum:number, m: Message) => {
                            let messageIsInCurrentThread: boolean = m.thread &&
                                currentThread &&
                                (currentThread.id === m.thread.id);
                            if (m && !m.isRead && !messageIsInCurrentThread) {
                                sum = sum + 1;
                            }
                            return sum;
                        },
                        0);
            });
    }
}

