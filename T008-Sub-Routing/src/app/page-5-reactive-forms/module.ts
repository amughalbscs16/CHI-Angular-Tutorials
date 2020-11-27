import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page5ReactiveFormsNameComponent } from './page-5-app-name-editor/page-5-app-name-editor.component';
import { Page5ReactiveFormsProfileComponent } from './page-5-app-profile-editor/page-5-app-profile-editor.component';
import { Page5ReactiveFormsParentComponent } from './page-5-reactive-forms.component';

const routes: Routes = [
  { path: '', component: Page5ReactiveFormsParentComponent },
  { path: 'name', component: Page5ReactiveFormsNameComponent},
  { path: 'profile', component: Page5ReactiveFormsProfileComponent },
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
  declarations: [
      Page5ReactiveFormsParentComponent,
      Page5ReactiveFormsNameComponent,
      Page5ReactiveFormsProfileComponent,


    ],
    exports: [
      Page5ReactiveFormsParentComponent,
      Page5ReactiveFormsNameComponent,
      Page5ReactiveFormsProfileComponent,
    ],
    providers: [],
})
export class Page5Module { }
