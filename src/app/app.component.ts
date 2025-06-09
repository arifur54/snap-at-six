import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { GuestAndAdminLayoutComponent } from "./guest-and-admin-layout/guest-and-admin-layout.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainLayoutComponent, FooterComponent, GuestAndAdminLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snap-at-six';

  isLoginVisible = false;

  onLoginStatusChanged(isLogin: boolean){
    this.isLoginVisible = isLogin;
    console.log(`Login Status Changed: ${isLogin}`)
  }
}
