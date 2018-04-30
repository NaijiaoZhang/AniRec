import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { SummonersService } from '../summoners.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


declare var $: any;

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummonerComponent implements OnInit {
	animeTitle:string; 
	similarTitles;
	sanitizedImages=[];

	constructor(private _sanitizer: DomSanitizer,private router:Router,private authService:AuthService,private afAuth: AngularFireAuth,private dataService: SummonersService, private db: AngularFireDatabase, private route: ActivatedRoute, private location:Location) { }

	ngOnInit() {
		this.animeTitle = this.route.snapshot.paramMap.get('title');
		$('.ui-helper-hidden-accessible').remove(); 
		$.get('./api/simAnime/'+this.animeTitle, data=>{
			this.similarTitles = data['results'];
		});
	}

	public sanitizeImage(image: string) {
    	return this._sanitizer.bypassSecurityTrustStyle('url('+image+')');
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

  	logout(){
		this.authService.logout(); 
	}



}
