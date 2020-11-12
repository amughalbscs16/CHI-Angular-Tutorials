import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1ParentComponent } from './page-1/parent.component';
import { Page2ParentComponent } from './page-2/parent.component';

const routes: Routes = [
  {path: 'page1', component: Page1ParentComponent},
  {path: 'page2', component: Page2ParentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
