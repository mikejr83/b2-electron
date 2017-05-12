import { app, BrowserWindow } from 'electron';
import Main from './main';

import * as log from 'electron-log';

// setup log
log.transports.console.level = 'debug';

Main.main(app, BrowserWindow);