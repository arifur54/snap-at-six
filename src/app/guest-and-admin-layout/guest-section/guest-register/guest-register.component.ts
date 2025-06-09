import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guest-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './guest-register.component.html',
  styleUrl: './guest-register.component.css'
})
export class GuestRegisterComponent {

   firstName = '';
  lastName = '';
  email = '';
  phone = '';
  password = '';

  onRegister() {
    console.log('Registering guest:', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      password: this.password
    });

    // TODO: Handle actual registration logic (API call etc.)
  }
}
