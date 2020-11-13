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
import { Page3ParentComponent } from './page-3-requests/page-3-requests.component';
import { Page4ParentComponent } from './page-4-observables/page-4-observables.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Page4AstronautComponent } from './page-4-observables/astronaut/astronaut.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1ParentComponent,
    Page1ChildComponent,
    Page2ParentComponent,
    Page2ChildComponent,
    AppNavigationComponent,
    AppFooterComponent,
    Page3ParentComponent,
    Page4ParentComponent,
    Page4AstronautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
