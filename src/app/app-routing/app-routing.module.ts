import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CameraComponent } from '../camera/camera.component';
import { ACComponent } from '../ac/ac.component';
import { LightsComponent } from '../lights/lights.component';
import { TabsComponent } from '../tabs/tabs.component';
import { AppComponent } from '../app.component';

// Routing table
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'HomePageComponent',

  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'camera',
    component: CameraComponent
  },

  {
    path: 'ac',
    component: ACComponent
  },

  {
    path:'lights',
    component: LightsComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
