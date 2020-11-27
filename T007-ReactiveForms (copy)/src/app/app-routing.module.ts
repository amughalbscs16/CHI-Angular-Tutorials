import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1ParentComponent } from './page-1/parent.component';
import { Page2ParentComponent } from './page-2/parent.component';
import { Page3ParentComponent } from './page-3-requests/page-3-requests.component';
import { Page4ParentComponent } from './page-4-observables/page-4-observables.component';
import { Page5ReactiveFormsParentComponent } from './page-5-reactive-forms/page-5-reactive-forms.component';

const routes: Routes = [
  { path: '', component: Page5ReactiveFormsParentComponent },
  { path: 'page3', component: Page3ParentComponent },
  { path: 'page1', component: Page1ParentComponent },
  { path: 'page2', component: Page2ParentComponent },
  { path: 'page4', component: Page4ParentComponent},
  {
    path: "page5_reactive_forms",
    loadChildren: () => import('./page-5-reactive-forms/module').then(m => m.Page5Module)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
