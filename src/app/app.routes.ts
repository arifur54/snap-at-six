import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { GuestAndAdminLayoutComponent } from './guest-and-admin-layout/guest-and-admin-layout.component';
import { GuestRegisterComponent } from './guest-and-admin-layout/guest-section/guest-register/guest-register.component';
import { GuestLoginComponent } from './guest-and-admin-layout/guest-section/guest-login/guest-login.component';
import { LandingComponent } from './main-layout/landing-component/landing-component.component';
import { AdminHomeComponent } from './guest-and-admin-layout/admin-section/admin-home/admin-home.component';
import { DashboardComponent } from './guest-and-admin-layout/admin-section/admin-home/dashboard/dashboard.component';
import { ModifyPageComponent } from './guest-and-admin-layout/admin-section/admin-home/modify-page/modify-page.component';
import { GuestsInfoComponent } from './guest-and-admin-layout/admin-section/admin-home/guests-info/guests-info.component';
import { AdminRegisterComponent } from './guest-and-admin-layout/admin-section/admin-home/admin-register/admin-register.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: LandingComponent }
    ]
  },
  {
    path: 'guest',
    component: GuestAndAdminLayoutComponent,
    children: [
      { path: 'login', component: GuestLoginComponent },
      { path: 'register', component: GuestRegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'modify-page', component: ModifyPageComponent},
      {path: 'guest-info', component: GuestsInfoComponent},
      {path: 'admin-register', component: AdminRegisterComponent}
    ]
  }
];
