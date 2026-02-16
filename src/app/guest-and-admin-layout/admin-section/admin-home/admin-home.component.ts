import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { UserProfile } from '../../../interfaces/user-profile';
import { AuthService } from '../../../services/auth.service';
import { User } from 'firebase/auth';
import { NavSidebarComponent } from "../../../global-components/nav-sidebar/nav-sidebar.component";

@Component({
  selector: 'app-admin-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NavSidebarComponent],
  standalone: true,
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  sidebarOpen = false;
  profile$!: Observable<UserProfile | null>;
  user$!: Observable<User |null>

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.user$ = this.authService.user$;
    this.profile$ = this.user$.pipe(
      switchMap(user => {
        if(!user){
          return new Observable<UserProfile | null>(subscriber => subscriber.next(null));
        }else{
          return this.authService.getCurrentUserProfile(user.uid);
        }
      }
    ));
  }

  // toggleSidebar() {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  // closeSidebar() {
  //   this.sidebarOpen = false;
  // }

}
