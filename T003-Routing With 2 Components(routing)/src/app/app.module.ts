import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1ParentComponent } from './page-1/parent.component';
import { Page1ChildComponent } from './page-1/child/child.component';

import { Page2ParentComponent } from './page-2/parent.component';
import { Page2ChildComponent } from './page-2/child/child.component';
import { AppNavigationComponent } from './navigation/navigation.component';
import { AppFooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1ParentComponent,
    Page1ChildComponent,
    Page2ParentComponent,
    Page2ChildComponent,
    AppNavigationComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
