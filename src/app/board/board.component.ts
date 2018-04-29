import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	loggedInUser; 
	userName;
	admin=['naijiao.zhang@duke.edu'];
	isAdmin=false;
	newThreadName;
	threadsObs: Observable<any>;
	threads;
	threadsArray=[];
	toDelete;

	constructor(private router:Router,private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase) { }

	ngOnInit() {
		this.userName = this.afAuth.authState;
		this.userName.subscribe(value=>{
			this.loggedInUser = value.email;
			for(var key in this.admin){
				if(this.loggedInUser === this.admin[key]){
					this.isAdmin = true; 
				}
			}
		});
		this.threadsObs = this.db.object("threads").valueChanges(); 
		this.threadsObs.subscribe(value =>{
			this.threads = value; 
			this.threadsArray=[];
			for(var key in this.threads){
				this.threadsArray.push(key);
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

    goThread(thread){
    	this.router.navigateByUrl('/thread/'+thread);
    }

	newThread(){
		this.db.object("threads/"+this.newThreadName).set({"comment1000001":{"name":"Oversear","content": "Keep the thread SFW."}}); 
	}

	deleteThread(){
		if(this.toDelete!=""){
			this.db.object("threads/"+this.toDelete).remove(); 
		}
	}

}
