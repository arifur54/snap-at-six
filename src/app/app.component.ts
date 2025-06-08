import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, PricingComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snap-at-six';
}
