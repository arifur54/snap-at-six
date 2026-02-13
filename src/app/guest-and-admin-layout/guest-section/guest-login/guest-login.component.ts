import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-guest-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './guest-login.component.html',
  styleUrl: './guest-login.component.css',
})
export class GuestLoginComponent {
  email = '';
  password = '';
  isAdmin = false;
  isLoading = false;
  error = "";

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    this.isLoading = true;
    this.error = '';

    try {
      const userCredential = await this.authService.login(this.email, this.password);

      console.log('Login Successful', userCredential.user);

      // Redirect after login

      if(this.isAdmin){
        // Route to Admin Page
        console.log(this.isAdmin);
      }else{
        // Route to Guest Page
        console.log(this.isAdmin);
      }


    } catch (err: any){
      console.log(err);
      this.error = 'Invalid email or password';
    }

    this.isLoading = false;
  }

  toggleRole() {
    this.isAdmin = !this.isAdmin;
  }


}
