import { Component } from '@angular/core';
import { LandingComponent } from './landing-component/landing-component.component';

@Component({
  selector: 'app-main-layout',
  imports: [ LandingComponent ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
