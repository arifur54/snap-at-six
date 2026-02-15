import { Injectable } from '@angular/core';
import {Auth, signOut, onAuthStateChanged, signInWithEmailAndPassword, User} from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor( private auth: Auth, private firestore: Firestore) { 
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

  async getCurrentUserProfile(uid: string) {
    const snap = await getDoc(doc(this.firestore, 'users', this.auth.currentUser?.uid || ''));
    if(!snap.exists()){
      throw new Error('User profile not found');
    }
    return snap.data() as UserProfile;
  }



}
