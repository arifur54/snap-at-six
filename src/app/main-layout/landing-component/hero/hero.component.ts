import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface HeroImage {
  url: string;
  alt: string;
}
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  images: HeroImage[] = [
    { url: 'assets/img_goof_1.png', alt: 'Photo booth setup 1' },
    { url: 'assets/img_goof_2.png', alt: 'Photo booth setup 2' },
    { url: 'assets/img_goof_3.png', alt: 'Photo booth setup 3' },
    { url: 'assets/img_goof_4.png', alt: 'Photo booth setup 4' }
  ];

  currentIndex = 0;
  private intervalId: number | null = null;
  private readonly rotationInterval = 5000; // 5 seconds
  private isTransitioning = false;

  ngOnInit(): void {
     if (isPlatformBrowser(this.platformId)) {
      this.startImageRotation();
    }
  }

  ngOnDestroy(): void {
    this.stopImageRotation();
  }

  private startImageRotation(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.intervalId = window.setInterval(() => {
      this.nextImage();
    }, this.rotationInterval);
  }

  private stopImageRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextImage(): void {
    if (this.isTransitioning) return;

    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.goToImage(nextIndex);
  }

  goToImage(index: number): void {
    if (index === this.currentIndex || this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    // Reset transition flag after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, 2000); // Match the CSS transition duration
  }

  onBookNow(): void {
    // Implement your booking logic here
    console.log('Book Now clicked!');
    // Example: this.router.navigate(['/booking']);
  }

  // Optional: Methods to control the slideshow
  pauseRotation(): void {
    this.stopImageRotation();
  }

  resumeRotation(): void {
    if (!this.intervalId) {
      this.startImageRotation();
    }
  }

  // Optional: Handle mouse enter/leave to pause on hover
  onMouseEnter(): void {
    this.pauseRotation();
  }

  onMouseLeave(): void {
    this.resumeRotation();
  }
}
