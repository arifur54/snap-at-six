import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  onLogin() {
    const role = this.isAdmin ? 'Admin' : 'Guest';
    console.log(`Logging in as ${role} with email: ${this.email}`);
    // Add actual login logic here
  }

  toggleRole() {
    this.isAdmin = !this.isAdmin;
  }
}
