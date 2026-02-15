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
  email:string = '';
  password:string = '';
  isLoading:boolean = false;
  isAdmin:boolean = false;
  error:string = "";

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    this.isLoading = true;
    this.error = '';

    try {
      const userCredential = await this.authService.login(this.email, this.password);
      const profile = await this.authService.getCurrentUserProfile(userCredential.user.uid);

      console.log('Login successful', profile);

      // Redirect after login

      if(profile.role === 'admin'){
        // Route to Admin Page
        console.log('Admin login');
        this.router.navigate(['/admin']);
      }else{
        // Route to Guest Page
        console.log('Guest login');
        this.router.navigate(['/guest']);
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
