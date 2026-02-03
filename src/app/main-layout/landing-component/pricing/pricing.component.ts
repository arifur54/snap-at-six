import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricingTiers = [
    {
      id: 1,
      name: "Basic",
      price: "$299",
      description: "Perfect for small gatherings and parties",
      features: [
        "3 hours of rental time",
        "Unlimited prints",
        "Basic backdrop options",
        "Digital copies",
        "On-site attendant"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: "$499",
      description: "Our most popular package for medium events",
      features: [
        "4 hours of rental time",
        "Unlimited prints",
        "Premium backdrop options",
        "Digital copies with custom branding",
        "On-site attendant",
        "Props included"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Luxury",
      price: "$799",
      description: "The ultimate experience for large events",
      features: [
        "6 hours of rental time",
        "Unlimited prints",
        "Custom designed backdrop",
        "Digital copies with custom branding",
        "Dedicated attendant",
        "Premium props collection",
        "Green screen option",
        "Social media integration"
      ],
      popular: false
    }
  ];
}
