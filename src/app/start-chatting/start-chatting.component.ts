import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-start-chatting',
  templateUrl: './start-chatting.component.html',
  styleUrls: ['./start-chatting.component.css']
})
export class StartChattingComponent {
  user_displayName: string;

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  name: any;


  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase , private router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    //this.user = this.afAuth.authState;
   // this.user = this.afAuth.authState;

   this.afAuth.auth.onAuthStateChanged((auth) => {
    if (auth) {
        // User is logged in, use the user object for its info.
       this.name = auth.displayName;
  }
});
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/');
}

Send(desc: string) {
  this.items.push({ message: desc , name: this.name});
    this.msgVal = '';
}

}
