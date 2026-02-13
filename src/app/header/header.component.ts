import { Component, EventEmitter, Output } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  @Output() isLoginActiveEmitter = new EventEmitter<boolean>();
  isLogin = false;
  
  user$!: Observable<User | null>;
  
  constructor(private auth: Auth, private authService: AuthService) {}

  ngOnInit(){
    this.user$ = this.authService.user$;
  }


  setLoginToTrue(){
    this.isLogin = true;
    this.isLoginActiveEmitter.emit(this.isLogin)
  }

  setLoginToFalse(){
    this.isLogin = false;
    this.isLoginActiveEmitter.emit(this.isLogin)
     console.log(`2 ${this.isLogin}`);
  }

  scrollTo(id: string){
    if(id === 'home'){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(id)
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  signOut() {
    this.authService.logOut();

  }


}
