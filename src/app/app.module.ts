import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SummonerComponent } from './summoner/summoner.component';

import { SummonersService } from './summoners.service';
import { AuthService} from './auth.service';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';
import { ProfileComponent } from './profile/profile.component';
import { VueprofComponent } from './vueprof/vueprof.component';

const firebaseConfig = {
	  apiKey: "AIzaSyBRRJZkyxmJRGhYdLKn4wSKsfaT9khdKfU",
    authDomain: "anirec-9b515.firebaseapp.com",
    databaseURL: "https://anirec-9b515.firebaseio.com",
    projectId: "anirec-9b515",
    storageBucket: "",
    messagingSenderId: "554256400812"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SummonerComponent,
    BoardComponent,
    ThreadComponent,
    ProfileComponent,
    VueprofComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
  ],
  providers: [AuthService,SummonersService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
