import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCVMHrJ8ZgjrPa8FmBsQs39TcYq9irZG1A",
      authDomain: "cours-tp-mouhaouir.firebaseapp.com",
      projectId: "cours-tp-mouhaouir",
      storageBucket: "cours-tp-mouhaouir.appspot.com",
      messagingSenderId: "529117110089",
      appId: "1:529117110089:web:474aa78f2742a723240498"
    }))
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }



