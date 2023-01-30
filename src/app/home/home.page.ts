import { Component } from '@angular/core';
import { CrewdleJsSdk, CrewdleEvents } from 'crewdle-js-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  ionViewDidEnter() {
    // Get User token: POST /v1/users
    const accessToken = '{token here}';
    // Get Room: POST /v1/rooms
    const roomId = '{room ID here}';

    const crewdle = new CrewdleJsSdk();
    crewdle.on(CrewdleEvents.ready, () => {
      console.log('Room ready');
    });
    crewdle.on(CrewdleEvents.roomLeft, () => {
      console.log('Room left');
    });
    crewdle.openRoom(roomId, accessToken, [], 'container')
      .then(() => console.log('Room loaded'))
      .catch((err) => console.error(err));
  }

}
