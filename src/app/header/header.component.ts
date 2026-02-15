import { Component, EventEmitter, Output } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  // @Output() isLoginActiveEmitter = new EventEmitter<boolean>();
  isLogin = false;
 
  user$!: Observable<User | null>;
  profile$!: Observable<UserProfile | null>;
  isAdmin$!: Observable<boolean>;

  constructor(private auth: Auth, private authService: AuthService) {}

  ngOnInit(){
    this.user$ = this.authService.user$;
    this.profile$ = this.user$.pipe(
      switchMap(user => {
        if(!user){
          return new Observable<UserProfile | null>(subscriber => subscriber.next(null));
        }else{
          return this.authService.getCurrentUserProfile(user.uid);
        }
      })
    );

    this.isAdmin$ = this.profile$.pipe(
      switchMap(profile => {
        if(profile?.role === 'admin'){
          return new Observable<boolean>(subscriber => subscriber.next(true));
        }else{
          return new Observable<boolean>(subscriber => subscriber.next(false));
        }
      })
    );
  }


  // setLoginToTrue(){
  //   this.isLogin = true;
  //   this.isLoginActiveEmitter.emit(this.isLogin)
  // }

  // setLoginToFalse(){
  //   this.isLogin = false;
  //   this.isLoginActiveEmitter.emit(this.isLogin)
  //    console.log(`2 ${this.isLogin}`);
  // }

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
