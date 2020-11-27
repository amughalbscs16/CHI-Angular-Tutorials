import { Input, Output, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-page-4-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class Page4AstronautComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    console.log("Confirm");
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}