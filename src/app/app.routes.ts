import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { GuestAndAdminLayoutComponent } from './guest-and-admin-layout/guest-and-admin-layout.component';
import { GuestRegisterComponent } from './guest-and-admin-layout/guest-section/guest-register/guest-register.component';
import { GuestLoginComponent } from './guest-and-admin-layout/guest-section/guest-login/guest-login.component';

export const routes: Routes = [
  {path: 'home', component: MainLayoutComponent},
  {
    path: 'guest', component: GuestAndAdminLayoutComponent,
    children: [
      { path: 'login', component: GuestLoginComponent },
      { path: 'register', component: GuestRegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }

  //  {path: 'home', component: MainLayoutComponent},

  //     { path: 'login', component: GuestLoginComponent },
  //     { path: 'register', component: GuestRegisterComponent },

  //  {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: AppComponent },
  //     { path: 'about', component: AppComponent },
  //     { path: 'pricing', component: AppComponent },
  //     { path: 'contact', component: AppComponent },
  //   ]
  // }
];
