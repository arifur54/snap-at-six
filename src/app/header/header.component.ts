import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  @Output() isLoginActiveEmitter = new EventEmitter<boolean>();
  isLogin = false;

  setLoginToTrue(){
    this.isLogin = true;
    this.isLoginActiveEmitter.emit(this.isLogin)
  }

  setLoginToFalse(){
    this.isLogin = false;
    this.isLoginActiveEmitter.emit(this.isLogin)
     console.log(`2 ${this.isLogin}`);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }


}
