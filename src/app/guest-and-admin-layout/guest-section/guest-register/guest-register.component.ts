import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guest-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './guest-register.component.html',
  styleUrl: './guest-register.component.css'
})
export class GuestRegisterComponent {

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  password = '';

  constructor(private auth: Auth, private firestore: Firestore) {}

  async onRegister() {
    console.log('Registering guest:', {
     
      password: this.password
    });
    // TODO: Handle actual registration logic (API call etc.)

    try {
      const cred = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const uid = cred.user.uid;

      // Save extar user data to Firestore

      await setDoc(doc(this.firestore, 'users', uid), {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        createdAt: new Date()
      })

      console.log('User registered Successfully');

    } catch (error) {
      console.error("Registration Error", error);
    }
  }

  async registerWithGoogle() {
        try {
          const provider = new GoogleAuthProvider();
          const cred = await signInWithRedirect(this.auth, provider);

        //   const user = cred.user;

        // await setDoc(doc(this.firestore, 'users', user.uid), {
        //   name: user.displayName,
        //   email: user.email,
        //   photo: user.photoURL,
        //   createdAt: new Date()
        // }, {merge: true})
      } catch (error) {
        console.error('Google Auth error:', error);
      }
    }

  async ngOnInit() {
    // const result = await getRedirectResult(this.auth);


    // if (result?.user) {
    //   const user = result.user

    //   await setDoc(doc(this.firestore, 'users', user.uid), {
    //     name: user.displayName,
    //     email: user.email,
    //     photo: user.photoURL,
    //     createdAt: new Date()
    //   }, { merge: true })
    // }

    onAuthStateChanged(this.auth, async (user) => {
    if (!user) return;

    console.log('Auth detected:', user);

    await setDoc(doc(this.firestore, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      createdAt: new Date()
    }, { merge: true });
  });
    console.log('Google login success after redirect');
  }

  async debugLogout() {
     await signOut(this.auth);
    console.log('Signed out');
  }
}
