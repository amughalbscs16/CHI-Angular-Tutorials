import { Input, Output, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-page-5-app-name-editor',
  templateUrl: './page-5-app-name-editor.component.html',
  styleUrls: ['./page-5-app-name-editor.component.scss'],
  providers: []
})
  
export class Page5ReactiveFormsNameComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}