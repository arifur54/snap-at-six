import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zaz Events';

  isLoginVisible = false;

  onLoginStatusChanged(isLogin: boolean){
    this.isLoginVisible = isLogin;
    console.log(`Login Status Changed: ${isLogin}`)
  }

  private firestore = inject(Firestore);
}

