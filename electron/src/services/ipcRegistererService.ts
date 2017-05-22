import { debug } from 'electron-log';

import { IPCListner } from './ipcListener';
import { ipcMain } from 'electron';

class IPCRegistererService {
  private listerns: IPCListner[] = [];
  private registrations: ((service: IPCRegistererService) => void)[] = [];
  /**
   * registerNewListner
   */
  public registerNewListner(listener: IPCListner) {
    this.listerns.push(listener);

    debug('Register channel:', listener.channel);

    ipcMain.on(listener.channel, listener.handler);
  }

  public registerRegistrationEvent(eventHander: (service: IPCRegistererService) => void) {
    this.registrations.push(eventHander);
  }

  public invokeRegister() {
    for (let handler of this.registrations) {
      try {
        handler(this);
      } catch (e) {

      }
    }
  }
}

export let registererService = new IPCRegistererService();
