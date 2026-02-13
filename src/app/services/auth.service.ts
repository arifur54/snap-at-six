import { Injectable } from '@angular/core';
import {Auth, signOut, onAuthStateChanged, signInWithEmailAndPassword, User} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor( private auth: Auth) { 
    onAuthStateChanged(this.auth, (user)=> {
      this.userSubject.next(user)
    })
  }  

  login(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logOut(){
    return signOut(this.auth);
  }

  getCurrentUser(){
    this.auth.currentUser;
  }



}
