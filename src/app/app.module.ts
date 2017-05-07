import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { SidebarModule } from 'ng-sidebar';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RoutepanelComponent } from './routepanel/routepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RoutepanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule.forRoot(),
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADaKMXuhmtJ-xmyScg4y8QJGTNrRf8YrA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
