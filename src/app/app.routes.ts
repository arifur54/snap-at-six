import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'about', component: AppComponent},
  {path: 'pricing', component: AppComponent},
  {path: 'contact', component: AppComponent}
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
