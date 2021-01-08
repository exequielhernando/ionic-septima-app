import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(  private oneSignal: OneSignal ) { }

  configuracionInicial () {

    this.oneSignal.startInit('973d3bc1-28a8-4006-bf5d-883e4ae3143c', '336238366162');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
    // do something when notification is received
      console.log('Notificacion recibida', noti);
    
    });

    this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);

    });

    this.oneSignal.endInit();
  }
}
