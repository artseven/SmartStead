import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CameraComponent } from '../camera/camera.component';
import { ACComponent } from '../ac/ac.component';
import { LightsComponent } from '../lights/lights.component';
import { TabsComponent } from '../tabs/tabs.component';
import { AppComponent } from '../app.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthPageComponent } from '../auth-page/auth-page.component';
import { ShoppingListComponent} from '../shopping-list/shopping-list.component';

// Routing table
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: AuthPageComponent
  },
  {
    path: 'cart',
    component: ShoppingListComponent
  }
  // {
  //   path: 'camera',
  //   component: CameraComponent
  // },
  //
  // {
  //   path: 'ac',
  //   component: ACComponent
  // },
  //
  // {
  //   path:'lights',
  //   component: LightsComponent
  // },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
