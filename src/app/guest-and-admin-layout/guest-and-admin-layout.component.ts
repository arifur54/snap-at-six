import { Component } from '@angular/core';
import { GuestLoginComponent } from "./guest-section/guest-login/guest-login.component";
import { GuestRegisterComponent } from "./guest-section/guest-register/guest-register.component";
import { AdminLoginComponent } from "./admin-section/admin-login/admin-login.component";
import { AdminRegisterComponent } from "./admin-section/admin-register/admin-register.component";

@Component({
  selector: 'app-guest-and-admin-layout',
  imports: [GuestLoginComponent, GuestRegisterComponent, AdminLoginComponent, AdminRegisterComponent],
  templateUrl: './guest-and-admin-layout.component.html',
  styleUrl: './guest-and-admin-layout.component.css'
})
export class GuestAndAdminLayoutComponent {

}
