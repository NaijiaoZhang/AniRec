import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  	userName:Observable<any>;
  	userData:Observable<any>;
  	loggedInUser;
  	loggedInData;

	constructor(private router:Router,private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase) { }

	ngOnInit() {
		this.userName = this.afAuth.authState;
		this.userName.subscribe(value=>{
			this.loggedInUser = value.email;
			this.userData = this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')).valueChanges(); 
			this.userData.subscribe(val=>{
				this.loggedInData=val;
			});

		});
	}

	uploadJson(){
		var selection = <HTMLInputElement>document.getElementById('files');
		if(selection.files.length>0){
			var file = selection.files[0];
			var fr = new FileReader(); 
			fr.onload = this.receivedText;
			fr.readAsText(file);
		}
	}

	receivedText(e){
		var lines = e.target.result;
		var readJSON = JSON.parse(lines);
		//POST REQUEST TO JERRY END POINT HERE:
		//$.post .... 
	}

	logout(){
		this.authService.logout(); 
	}

	goBoards(){
    	this.router.navigateByUrl('/board');
  	}

  	goLogin(){
    	this.router.navigateByUrl('/login');
  	}

  	goMe(){
    	this.router.navigateByUrl('/profile/me');
  	}

	updateBio(){
		this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')+"/Bio").set(this.loggedInData.Bio);
	}

	updateIgn(){
		this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')+"/IGN").set(this.loggedInData.IGN);
	}

}
