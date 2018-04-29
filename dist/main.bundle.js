webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summoner_summoner_component__ = __webpack_require__("./src/app/summoner/summoner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thread_thread_component__ = __webpack_require__("./src/app/thread/thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vueprof_vueprof_component__ = __webpack_require__("./src/app/vueprof/vueprof.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_4__summoner_summoner_component__["a" /* SummonerComponent */] },
    { path: 'board', component: __WEBPACK_IMPORTED_MODULE_5__board_board_component__["a" /* BoardComponent */] },
    { path: 'thread/:threadname', component: __WEBPACK_IMPORTED_MODULE_6__thread_thread_component__["a" /* ThreadComponent */] },
    { path: 'profile/me', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:user', component: __WEBPACK_IMPORTED_MODULE_8__vueprof_vueprof_component__["a" /* VueprofComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__summoner_summoner_component__ = __webpack_require__("./src/app/summoner/summoner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__summoners_service__ = __webpack_require__("./src/app/summoners.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__thread_thread_component__ = __webpack_require__("./src/app/thread/thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vueprof_vueprof_component__ = __webpack_require__("./src/app/vueprof/vueprof.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyBRRJZkyxmJRGhYdLKn4wSKsfaT9khdKfU",
    authDomain: "anirec-9b515.firebaseapp.com",
    databaseURL: "https://anirec-9b515.firebaseio.com",
    projectId: "anirec-9b515",
    storageBucket: "",
    messagingSenderId: "554256400812"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__summoner_summoner_component__["a" /* SummonerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__thread_thread_component__["a" /* ThreadComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__vueprof_vueprof_component__["a" /* VueprofComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__summoners_service__["a" /* SummonersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(db, afAuth, router) {
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            _this.loggedInUser = email;
            console.log(_this.loggedInUser + " authlogin");
            _this.router.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log('Something went wrong: ', err.message);
        });
    };
    AuthService.prototype.emailSignup = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            _this.db.object("profiles/" + email.replace(/\./g, '%2E')).set({ "Bio": "N/A", "IGN": "N/A" });
            _this.router.navigateByUrl('/');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.getLoggedInUser = function () {
        console.log(this.loggedInUser + " getLoggedIn");
        return this.loggedInUser;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n\ttext-align:center;\n\tmargin-top:1%;\n}\n\nh2{\n\ttext-align: center;\n}\n\ninput{\n\tcolor:#9b9b9b;\n;\n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.threads{\n\tmargin-top:1%;\n}\n\n#threadcontainer{\n\tmargin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n\tdisplay: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\na:hover{\n\tbackground-color: #111;\n}\n\n#login{\n\tposition:fixed;\n\tright:0px;\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><a href=\"./board\">Boards</a></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><a href=\"./profile/me\">Profile</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><a href=\"./login\">Login</a></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<h1>AniRec</h1>\n<div *ngIf=\"afAuth.authState | async as user;\" id=\"boardoptions\">\n\t<div id=\"threadcontainer\">\n\t\t<input [(ngModel)]=\"newThreadName\" name=\"newthread\" placeholder=\"Name of Thread...\"/><br>\n\t\t<button class =\"btn btn-success\" (click)=\"newThread(user.email)\">Create</button>\n\t</div>\n</div>\n<div *ngIf=\"isAdmin==true\">\n\t<div id=\"threadcontainer\">\n\t\t<input [(ngModel)]=\"toDelete\" name=\"newthread\" placeholder=\"Delete Thread\"/><br>\n\t\t<button class =\"btn btn-danger\" (click)=\"deleteThread()\">Delete</button>\n\t</div>\n</div>\n<h2>Threads</h2>\n<div class=\"threads\" *ngFor=\"let thread of threadsArray\">\n\t<a href=\"./thread/{{thread}}\">{{thread}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardComponent = /** @class */ (function () {
    function BoardComponent(afAuth, authService, db) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.db = db;
        this.admin = ['naijiao.zhang@duke.edu'];
        this.isAdmin = false;
        this.threadsArray = [];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.afAuth.authState;
        this.userName.subscribe(function (value) {
            _this.loggedInUser = value.email;
            for (var key in _this.admin) {
                if (_this.loggedInUser === _this.admin[key]) {
                    _this.isAdmin = true;
                }
            }
        });
        this.threadsObs = this.db.object("threads").valueChanges();
        this.threadsObs.subscribe(function (value) {
            _this.threads = value;
            _this.threadsArray = [];
            for (var key in _this.threads) {
                _this.threadsArray.push(key);
            }
        });
    };
    BoardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    BoardComponent.prototype.newThread = function () {
        this.db.object("threads/" + this.newThreadName).set({ "comment1000001": { "name": "Oversear", "content": "Keep the thread SFW." } });
    };
    BoardComponent.prototype.deleteThread = function () {
        if (this.toDelete != "") {
            this.db.object("threads/" + this.toDelete).remove();
        }
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__("./src/app/board/board.component.html"),
            styles: [__webpack_require__("./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\nh1{\n\tmargin-top:15%;\n    margin-bottom:2%;\n    margin-right:auto;\n    margin-left:auto;\n\ttext-align: center;\n    font-size:75px;\n}\n\n#login{\n\tposition:fixed;\n\tright:0px;\n}\n\n.search-summoner{\n    text-align:center;\n}\n\n.search-summoner input{\n    display: block;\n    width: 35%;\n    padding: 15px 150px 18px 17px;\n    border: none;\n    font-size: 15px;\n    color: #9b9b9b;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.25);\n            box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.25);\n    margin:auto auto;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><a href=\"./board\">Boards</a></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><a href=\"./profile/me\">Profile</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><a href=\"./login\">Login</a></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<h1>AniRec</h1>\n<form id=\"summonersubmit\" class=\"search-summoner\">\n    <input id=\"search\" type=\"text\" name=\"username\" placeholder=\"Search Anime\"/>\n</form>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('here');
        __WEBPACK_IMPORTED_MODULE_4_jquery__["get"]('./api/test', function (data) {
            console.log(data);
        });
        // let routerRef = this.router; 
        // $('#summonersubmit').keypress(function(e){
        // 	let code = e.keyCode;
        // 	if (code === 13){
        // 		let search = $('#search').val(); 
        // 		console.log('/user/'+search);
        // 		routerRef.navigate(['user',search]);
        // 		$('#summonersubmit').submit();
        // 	}
        // })
        // $("#summonersubmit").submit(function(e){
        //      e.preventDefault();
        //  });
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".loginform{\n\tmargin-top:2%;\n    margin-right:auto;\n    margin-left:auto;\n\ttext-align:center;\n\tmin-width: 400px; \n\tmax-width: 400px;\n\tmin-height: 250px;\n\tmax-height: 250px; \n\tbackground-color:#0b254f;\n\tborder-radius: 2%;\n   \tborder:5px solid #cec32f;\n}\n\n.loginform button{\n\tmargin: 10px 10px 10px 10px ;\n}\n\n.loginform input{\n\tborder:none;\n\tdisplay: block;\n    width: 40%;\n    font-size: 15px;\n    color: #9b9b9b;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    margin:auto auto;\n}\n\n.container:{\n\ttext-align:center;\n\tmargin:20px auto;\n}\n\n#login-container{\n\tmargin-top:10%;\n}\n\nh1{\n\tmargin-top:10%;\n\tmargin-bottom:5%;\n\ttext-align:center;\n\tfont-size:100px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Boosted.exe</h1>\n<form class=\"loginform\">\n\t<div id=\"login-container\">\t\n\t\tEmail:<br>\n\t \t<input [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\"/><br>\n\t \tPassword:<br>\n\t  \t<input [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\"/><br>\n\t  \t<button class =\"btn btn-success\" (click)=login()>Login</button>\n\t  \t<button class =\"btn btn-success\" (click)=register()>Register</button>\n\t</div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.email != "" && this.password != "") {
            this.authService.login(this.email, this.password);
        }
    };
    LoginComponent.prototype.register = function () {
        //prolly needed additional regex
        if (this.email != "" && this.password != "") {
            this.authService.emailSignup(this.email, this.password);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n\ttext-align:center;\n\tmargin-top:1%;\n}\n\nh2{\n\ttext-align: center;\n}\n\ninput{\n\tcolor:#9b9b9b;\n    width:10%;\n    margin-bottom: 1.5%;\n}\n\ntextarea{\n    color:#9b9b9b;\n    width:20%; \n\n}\n\n.igncontainer{\n    margin-left:5%;   \n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.threads{\n\tmargin-top:1%;\n}\n\n#threadcontainer{\n\tmargin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n\tdisplay: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\na:hover{\n\tbackground-color: #111;\n}\n\n#login{\n\tposition:fixed;\n\tright:0px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><a href=\"./board\">Boards</a></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><a href=\"./profile/me\">Profile</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><a href=\"./login\">Login</a></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<div *ngIf=\"loggedInData;else login\">\n\t<h2>{{loggedInUser}}</h2>\n\t<div class=\"igncontainer\">\n\t\tIGN: <input [(ngModel)]=\"loggedInData.IGN\" name=\"newthread\" placeholder=\"Name of Thread...\"/>\n\t\t<button class =\"btn btn-success\" (click)=\"updateIgn()\">Update</button>\n\t</div>\n\t<div class=\"igncontainer\">\n\t\tBio: <textarea id=\"commentbox\" [(ngModel)]=\"loggedInData.Bio\" name=\"newthread\" placeholder=\"Comment...\"></textarea><br>\n\t\t<button class =\"btn btn-success\" (click)=\"updateBio()\">Update</button>\n\t</div>\n</div>\n<ng-template #login>Please Log In...</ng-template>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(afAuth, authService, db) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.db = db;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.afAuth.authState;
        this.userName.subscribe(function (value) {
            _this.loggedInUser = value.email;
            _this.userData = _this.db.object("profiles/" + _this.loggedInUser.replace(/\./g, '%2E')).valueChanges();
            _this.userData.subscribe(function (val) {
                _this.loggedInData = val;
            });
        });
    };
    ProfileComponent.prototype.updateBio = function () {
        this.db.object("profiles/" + this.loggedInUser.replace(/\./g, '%2E') + "/Bio").set(this.loggedInData.Bio);
    };
    ProfileComponent.prototype.updateIgn = function () {
        this.db.object("profiles/" + this.loggedInUser.replace(/\./g, '%2E') + "/IGN").set(this.loggedInData.IGN);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/summoner/summoner.component.css":
/***/ (function(module, exports) {

module.exports = ".carousel{\n    background: #2f4357;\n    margin-top: 20px;\n    min-height: 400px; \n   \tmax-height:400px;\n}\n.carousel .item{\n    min-height: 280px; \n   \tmax-height:280px;\n    margin:0 auto;\n    text-align:center;\n    margin-top:5%;\n}\n.carousel .item img{\n    margin: 0 auto; /* Align slide image horizontally center */\n}\n.bs-example{\n\tmargin: 20px;\n}\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n.progress{\n\twidth:25%;\n\tmargin-left:auto;\n\tmargin-right:auto;\n}\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\nli {\n    float: left;\n}\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\nli a:hover {\n    background-color: #111;\n}\n#login{\n\tposition:fixed;\n\tright:0px;\n}\n#userinfo{\n\tmargin-left:2.5%;\n}\n#duopercentage{\n\tmargin-bottom: 2%;\n}\n"

/***/ }),

/***/ "./src/app/summoner/summoner.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n  <ul class=\"horizontal\">\n    <li><a href=\"./\">AniRec</a></li>\n    <li><a href=\"./board\">Boards</a></li>\n    <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n    <li *ngIf=\"afAuth.authState | async as user\"><a href=\"./profile/me\">Profile</a></li>\n    <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n    <ng-template #showLogin>\n      <li id=\"login\"><a href=\"./login\">Login</a></li>\n    </ng-template>\n  </ul> \n<div>\n<div *ngIf=\"summonerObject; let summonerObject; else loading\">\n\t<div id=\"userinfo\">\n\t <h1>{{summonerIgn}}</h1>\n\t\t  <dl>\n\t\t    <dt>Duo Games in 20:</dt>\n\t\t    <dd>{{summonerObject.duogames}}</dd>\n\n\t\t    <dt>Duo MMR:</dt>\n\t\t    <dd>{{summonerObject.duommr}}</dd>\n\t\t  </dl>\n\t</div>\n</div>\n<ng-template #loading>Loading User Data...</ng-template>\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n\n  <div class=\"item active\">\n    \tMost Duos:\n    \t<h2>{{mostPartner}}</h2>\n    \tWith A: \n    \t<h2>{{mostPartnerWL*100}}% W/R</h2>\n    </div>\n\n    <div class=\"item\">\n      Total MMR Gained:\n      <h2>{{netGain}}</h2>\n    </div>\n\n    <div class=\"item\">\n    \t<div id=\"duopercentage\">\n    \tDuo Percentages:\n    \t</div>\n   \t\t<div *ngFor=\"let item of allPartnerRate; let i = index\" class=\"progress\">\n\t\t  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\"\n\t\t  aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"item*100/summonerObject.duogames+'%'\">\n\t\t    {{allPartnerNames[i]}}\n  \t\t\t</div>\n  \t\t</div>\n    </div>\n\n    \n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/summoner/summoner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummonerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summoners_service__ = __webpack_require__("./src/app/summoners.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SummonerComponent = /** @class */ (function () {
    function SummonerComponent(afAuth, dataService, db, route, location) {
        this.afAuth = afAuth;
        this.dataService = dataService;
        this.db = db;
        this.route = route;
        this.location = location;
        this.allPartnerRate = [];
        this.allPartnerNames = [];
        this.allPartnerTotal = 0;
        this.netGain = 0;
    }
    SummonerComponent.prototype.ngOnInit = function () {
        this.summonerIgn = this.route.snapshot.paramMap.get('username');
        this.getDataFromDb(this.summonerIgn);
    };
    SummonerComponent.prototype.getDataFromDb = function (summonerUsername) {
        var _this = this;
        this.items = this.db.object("summoners/" + summonerUsername).valueChanges();
        this.items.subscribe(function (value) {
            _this.summonerObject = value;
            var totalDuo = 0;
            var maxDuo = 0;
            var duoMost = "";
            for (var partner in value['partners']) {
                totalDuo += value['partners'][partner]['win'];
                totalDuo += value['partners'][partner]['loss'];
                if (totalDuo > maxDuo) {
                    maxDuo = totalDuo;
                    totalDuo = 0;
                    duoMost = partner;
                    _this.mostPartner = duoMost;
                }
                _this.allPartnerRate.push(value['partners'][partner]['win'] + value['partners'][partner]['loss']);
                _this.allPartnerNames.push(partner);
                _this.allPartnerTotal += value['partners'][partner]['win'];
                _this.allPartnerTotal += value['partners'][partner]['loss'];
                _this.netGain += 12 * (value['partners'][partner]['win'] - value['partners'][partner]['loss']);
            }
            _this.mostPartnerWL = _this.summonerObject['partners'][_this.mostPartner]['win'] / (_this.summonerObject['partners'][_this.mostPartner]['win'] + _this.summonerObject['partners'][_this.mostPartner]['loss']);
        });
    };
    SummonerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-summoner',
            template: __webpack_require__("./src/app/summoner/summoner.component.html"),
            styles: [__webpack_require__("./src/app/summoner/summoner.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__summoners_service__["a" /* SummonersService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], SummonerComponent);
    return SummonerComponent;
}());



/***/ }),

/***/ "./src/app/summoners.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummonersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummonersService = /** @class */ (function () {
    function SummonersService(db) {
        this.db = db;
    }
    SummonersService.prototype.getSummonerInfo = function (summonerUsername) {
        console.log(summonerUsername);
    };
    SummonersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SummonersService);
    return SummonersService;
}());



/***/ }),

/***/ "./src/app/thread/thread.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n\ttext-align:center;\n\tmargin-top:1%;\n}\n\nh2{\n\ttext-align: center;\n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.comment{\n    margin-left:2%;\n    margin-top:1%;\n}\n\n.threads{\n\tmargin-top:1%;\n}\n\n#threadcontainer{\n\tmargin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n\tcolor:white;\n}\n\na:hover{\n\tcolor: #4286f4;\n    text-decoration: none;\n}\n\n#login{\n\tposition:fixed;\n\tright:0px;\n}\n\n#commentbox{\n    width:25%;\n}"

/***/ }),

/***/ "./src/app/thread/thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><a href=\"./board\">Boards</a></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><a href=\"./profile/me\">Profile</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><a href=\"./login\">Login</a></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<h2>{{threadName}}</h2>\n<div *ngIf=\"afAuth.authState | async as user;\" id=\"boardoptions\">\n\t<div id=\"threadcontainer\">\n\t\t<textarea id=\"commentbox\" [(ngModel)]=\"commentText\" name=\"newthread\" placeholder=\"Comment...\"></textarea><br>\n\t\t<button class =\"btn btn-success\" (click)=\"comment(user.email)\">Create</button>\n\t</div>\n</div>\n<div class=\"comment\" *ngFor=\"let comment of commentName; let i = index\">\n\t<a href=\"./profile/{{comment}}\">{{comment}}</a> : {{commentInfo[i]}}\n</div>"

/***/ }),

/***/ "./src/app/thread/thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadComponent = /** @class */ (function () {
    function ThreadComponent(afAuth, authService, db, route) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.db = db;
        this.route = route;
        this.commentName = [];
        this.commentInfo = [];
    }
    ThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadName = this.route.snapshot.paramMap.get('threadname');
        this.items = this.db.object("threads/" + this.threadName).valueChanges();
        this.items.subscribe(function (value) {
            _this.commentName = [];
            _this.commentInfo = [];
            for (var key in value) {
                _this.commentName.push(value[key]['name']);
                _this.commentInfo.push(value[key]['content']);
            }
        });
    };
    ThreadComponent.prototype.comment = function (username) {
        var offset = 1000000;
        var index = this.commentName.length + 1 + offset;
        this.db.object("threads/" + this.threadName + "/comment" + index).set({ "name": "naijiao.zhang@duke.edu", "content": this.commentText });
    };
    ThreadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thread',
            template: __webpack_require__("./src/app/thread/thread.component.html"),
            styles: [__webpack_require__("./src/app/thread/thread.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ThreadComponent);
    return ThreadComponent;
}());



/***/ }),

/***/ "./src/app/vueprof/vueprof.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n\ttext-align:center;\n\tmargin-top:1%;\n}\n\nh2{\n\ttext-align: center;\n}\n\ninput{\n\tcolor:#9b9b9b;\n    width:10%;\n    margin-bottom: 1.5%;\n}\n\ntextarea{\n    color:#9b9b9b;\n    width:20%; \n\n}\n\n.igncontainer{\n    margin-left:5%;   \n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.threads{\n\tmargin-top:1%;\n}\n\n#threadcontainer{\n\tmargin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n\tdisplay: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\na:hover{\n\tbackground-color: #111;\n}\n\n#login{\n\tposition:fixed;\n\tright:0px;\n}\n\n.profileview{\n    margin-left:1.5%;\n}"

/***/ }),

/***/ "./src/app/vueprof/vueprof.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><a href=\"./board\">Boards</a></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><a href=\"./profile/me\">Profile</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><a href=\"./login\">Login</a></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<div *ngIf=\"data\">\n\t<div class=\"profileview\">\n\t\t<h2>{{email}}</h2>\n\t\tIGN: {{data.IGN}} <br>\n\t\tBio: {{data.Bio}}\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/vueprof/vueprof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VueprofComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VueprofComponent = /** @class */ (function () {
    function VueprofComponent(afAuth, authService, db, route) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.db = db;
        this.route = route;
    }
    VueprofComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.route.snapshot.paramMap.get('user');
        this.dataObs = this.db.object("profiles/" + this.email.replace(/\./g, '%2E')).valueChanges();
        this.dataObs.subscribe(function (value) {
            _this.data = value;
        });
    };
    VueprofComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vueprof',
            template: __webpack_require__("./src/app/vueprof/vueprof.component.html"),
            styles: [__webpack_require__("./src/app/vueprof/vueprof.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], VueprofComponent);
    return VueprofComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map