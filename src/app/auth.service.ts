import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  loggedInUser;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.loggedInUser = email;
        console.log(this.loggedInUser+" authlogin");
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        alert(error);
      });
  }

  emailSignup(email: string, password: string, username:string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.db.object("profiles/"+email.replace(/\./g,'%2E')).set({"Bio":"N/A","Username":username});
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        alert(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  getLoggedInUser(){
    console.log(this.loggedInUser+" getLoggedIn");
    return this.loggedInUser; 
  }
}