import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vueprof',
  templateUrl: './vueprof.component.html',
  styleUrls: ['./vueprof.component.css']
})
export class VueprofComponent implements OnInit {

	email;
	dataObs:Observable<any>;
	data;
	constructor(private router:Router,private afAuth: AngularFireAuth, private authService:AuthService,private db: AngularFireDatabase,private route: ActivatedRoute) { }

	ngOnInit() {
		this.email = this.route.snapshot.paramMap.get('user');
		this.dataObs=this.db.object("profiles/"+this.email.replace(/\./g,'%2E')).valueChanges(); 
		this.dataObs.subscribe(value=>{
			this.data=value;
		});
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
}
