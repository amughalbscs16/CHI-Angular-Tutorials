import { Input, Output, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { Subscription } from 'rxjs';

export type EditorType = 'name' | 'profile';
@Component({
  selector: 'app-page-5-reactive-forms',
  templateUrl: './page-5-reactive-forms.component.html',
  styleUrls: ['./page-5-reactive-forms.component.scss'],
  providers: [MissionService]
})
export class Page5ReactiveFormsParentComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}