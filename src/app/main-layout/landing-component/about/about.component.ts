import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 features = [
    {
      id: 1,
      title: "High-Quality Prints",
      description: "Instant professional-grade prints with our state-of-the-art printing technology.",
      icon: "📷"
    },
    {
      id: 2,
      title: "Custom Backdrops",
      description: "Tailored backdrops to match your event theme and style.",
      icon: "🎨"
    },
    {
      id:3,
      title: "Social Sharing",
      description: "Instant digital copies with branded frames for easy social media sharing.",
      icon: "📱"
    },
    {
      id: 4,
      title: "Attendant Included",
      description: "Professional attendant to ensure smooth operation throughout your event.",
      icon: "👔"
    }
  ];
}
