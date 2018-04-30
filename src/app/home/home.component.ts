import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  allAnime = [];

  constructor(private router:Router,private afAuth: AngularFireAuth,private authService:AuthService) { }

  ngOnInit() {
    var that = this; 
    $.get('./api/allanime',function(data){
       for(var key in data){
         that.allAnime.push(key);
       }
       $("#search").autocomplete({ 
            source: function(request, response) {
              $(".ui-helper-hidden-accessible").hide();
              request.term = request.term.charAt(0).toUpperCase()+request.term.slice(1);
              var results = $.ui.autocomplete.filter(that.allAnime, request.term);
              var correctedResults = [];
              var alphabet = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','!','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
                          'V','W','X','Y','Z'];

              if(results.length>10){
                for(var i = results.length-1;i>=0;i--){
                  if(request.term == results[i]){
                    correctedResults.push(results[i]);
                  }
                }
                for(var z =0;z<alphabet.length;z++){
                  for(var k = results.length-1;k>=0;k--){
                    if(request.term.length<results[k].length){
                   
                      if(request.term+alphabet[z]==results[k].substring(0,request.term.length+1)){
                        
                        correctedResults.push(results[k]);
                      }
                      if(correctedResults.length==10){
                        response(correctedResults);
                        return;
                      }
                    }
                  }

                }
              }
              response(results.slice(0, 10));
         }
        });
    });
  	let routerRef = this.router; 
  	$('#summonersubmit').keypress(function(e){
  		let code = e.keyCode;
  		if (code === 13){
  			let search = $('#search').val(); 
  			routerRef.navigate(['anime',search]);
  			$('#summonersubmit').submit();
  		}
  	})
  	$("#summonersubmit").submit(function(e){
        e.preventDefault();
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

}
