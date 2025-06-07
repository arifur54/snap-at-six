import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      eventDate: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.contactForm.valid){
      // Simple message
      console.log(`From Submitted! ${this.contactForm.value}`);
      this.contactForm.reset();
      this.submitted = false;
    }
  }

}
