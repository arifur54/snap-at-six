import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css'
})
export class NavSidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.toggleSidebarEvent.emit();
  }

  closeSidebar() {
    this.isOpen = false;
    this.toggleSidebarEvent.emit();
  }

}
