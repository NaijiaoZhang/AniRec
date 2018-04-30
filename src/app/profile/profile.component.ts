import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';



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
    input_text;
    similarTitles; 
    test = "test";

	constructor(private _sanitizer: DomSanitizer, private router:Router,private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase) { }

	ngOnInit() {
		this.userName = this.afAuth.authState;
    	this.input_text = "";
		this.userName.subscribe(value=>{
			if(value!=null){
				this.loggedInUser = value.email;
				this.userData = this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')).valueChanges();
				this.userData.subscribe(val=>{
					this.loggedInData=val;
				});
			}
		});
	}

	public sanitizeImage(image: string) {
		console.log(this._sanitizer.bypassSecurityTrustStyle('background:url('+image+') 20% 1% / cover no-repeat;'));
    	return this._sanitizer.bypassSecurityTrustStyle('background:url('+image+') 20% 1% / cover no-repeat;');
  	}

	uploadJson(){
		var selection = <HTMLInputElement>document.getElementById('files');
		if(selection.files.length>0){
			var file = selection.files[0];
			var fr = new FileReader();
			fr.onload = this.receivedText.bind(this);
			fr.readAsText(file);
		}
	}

	receivedText(e){
		var lines = e.target.result;
		var readJSON =lines;
		var that = this; 
		console.log(this.test);
		console.log('******');
		$.ajax({
	        type: "POST",
	        url: '/api/predictRating',
	        contentType: "application/json",
	        dataType: "json",
	        data: readJSON,
	        success: response => {
	        	var toDisplay=[]; 
	        	console.log('here')
	        	console.log(response);
	        	for(var i=0;i<5;i++){
	        		toDisplay.push(response['results'][i]);
	        		response['results'][i]['genre']=response['results'][i]['genre'].replace(/,/g, ', ');
	        	}
	            this.similarTitles = toDisplay;
				for(var k in this.similarTitles){
					this.similarTitles[k]['url']= that.sanitizeImage(this.similarTitles[k]['url']);
				}
	        },
	        error: response => {
	            console.log(response);
	        }
    	});
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
	    this.loggedInData.Bio = this.input_text
	    this.input_text = "";
	    this.db.object("profiles/"+this.loggedInUser.replace(/\./g,'%2E')+"/Bio").set(this.loggedInData.Bio);
	}
}
