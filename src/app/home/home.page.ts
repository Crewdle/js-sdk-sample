import { Component } from '@angular/core';
import { CrewdleJsSdk } from 'crewdle-js-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    // Get User token: POST /v1/users
    const accessToken = 'abcd';
    // Get Room: POST /v1/rooms
    const roomId = 'abcd';

    const crewdle = new CrewdleJsSdk();
    crewdle.openRoom(roomId, accessToken, ['chat'], 'container');
    // crewdle.openRoom(roomId, userToken, 'container');
    /* crewdle.on('room_leave', () => {
      // do something;
    });*/
  }

}
