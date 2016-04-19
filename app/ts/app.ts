import {
  Component
} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

/*
 * Components
 */
import {Nav} from './components/Nav';
import {Sidebar} from './components/Sidebar';
import {Content} from './components/Content';

/*
 * Injectables
 */
import { servicesInjectables } from './services/services';
import {utilInjectables} from './util/util';

/*
 * Services
 */
import {
  MessagesService,
  ThreadsService,
  UserService
} from './services/services';

import {ChatExampleData} from './ChatExampleData';

/*
 * Webpack
 */
require('../css/styles.scss');

@Component({
  selector: 'app',
  directives: [Nav, Sidebar, Content],
  template: `
  <div class="app">
    <nav></nav>
    <div class="container">
      <sidebar></sidebar>
      <content></content>
    </div>
  </div>
  `
})
class ChatApp {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}

bootstrap(ChatApp, [ servicesInjectables, utilInjectables ]);

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('./services/services');
require('./ChatExampleData');
require('./util/util');
require('./components/Nav');
require('./components/Content');
require('./components/Sidebar');

