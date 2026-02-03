import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';

@Component({
  selector: 'app-landing-component',
  imports: [HeroComponent, AboutComponent, ContactComponent, PricingComponent],
  templateUrl: './landing-component.component.html',
  styleUrl: './landing-component.component.css'
})
export class LandingComponent {

}
