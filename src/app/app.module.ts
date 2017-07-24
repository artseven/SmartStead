// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms'
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';
import 'hammerjs';

// Material design modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MaterialModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCheckboxModule,
  MdTabsModule,
  MdTabHeaderPosition,
  MdSidenavModule
} from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CameraComponent } from './camera/camera.component';
import { ACComponent } from './ac/ac.component';
import { LightsComponent } from './lights/lights.component';
import { TabsComponent } from './tabs/tabs.component';

// Services
import { SessionService} from './session.service';

// routes
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    CameraComponent,
    ACComponent,
    LightsComponent,
    TabsComponent,
    HomePageComponent,
    LogInComponent,
    SignUpComponent,
    HeaderComponent,
    AuthPageComponent,
    DialogComponent
  ],
  imports: [
    // Angular main modules
    BrowserModule,
    FormsModule,
    HttpModule,
    // Material design
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSidenavModule,
    // Routing
    AppRoutingModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
