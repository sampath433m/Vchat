import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { StartChattingComponent } from './start-chatting/start-chatting.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AlertModule } from 'ng-bootstrap';


export const firebaseconfig = {
  apiKey: 'AIzaSyDdq4REXtbIxaZBAN9M5xU_aCQN9AY3G80',
  authDomain: 'vchat-4f108.firebaseapp.com',
  databaseURL: 'https://vchat-4f108.firebaseio.com',
  projectId: 'vchat-4f108',
  storageBucket: '',
  messagingSenderId: '479398819553'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StartChattingComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
