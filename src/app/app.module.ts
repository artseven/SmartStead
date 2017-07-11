import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCheckboxModule,
  MdTabsModule,
  MdTabHeaderPosition,
} from '@angular/material';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CameraComponent } from './camera/camera.component';
import { ACComponent } from './ac/ac.component';
import { LightsComponent } from './lights/lights.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    CameraComponent,
    ACComponent,
    LightsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCheckboxModule,
    MdTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
