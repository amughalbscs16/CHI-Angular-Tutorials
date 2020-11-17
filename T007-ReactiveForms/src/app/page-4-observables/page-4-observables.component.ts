import { Input, Output, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-4-missioncontrol',
  templateUrl: './page-4-observables.component.html',
  styleUrls: ['./page-4-observables.component.scss'],
  providers: [MissionService]
})
export class Page4ParentComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}