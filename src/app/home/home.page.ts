import { Component } from '@angular/core';
import { CrewdleJsSdk, CrewdleEvents, CrewdleFeatures } from 'crewdle-js-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  ionViewDidEnter() {
    const accessKey = '{Your access token}';
    // Get User token: POST /v1/users
    const accessToken = '{User access token}';
    // Get Room: POST /v1/users/:userId/rooms
    const roomId = '{Room ID}}';

    const crewdle = new CrewdleJsSdk();
    crewdle.on(CrewdleEvents.ready, () => {
      console.log('Room ready');
    });
    crewdle.on(CrewdleEvents.roomLeft, () => {
      console.log('Room left');
    });
    crewdle.on(CrewdleEvents.authFailed, () => {
      console.log('Auth failed');
    });
    const features = [
      CrewdleFeatures.chat,
    ];
    crewdle.openRoom(roomId, accessKey, accessToken, features, 'container')
      .then(() => console.log('Room loaded'))
      .catch((err) => console.error(err));
  }

}
