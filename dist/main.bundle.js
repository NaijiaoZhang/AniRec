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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var summoner_component_1 = __webpack_require__("./src/app/summoner/summoner.component.ts");
var board_component_1 = __webpack_require__("./src/app/board/board.component.ts");
var thread_component_1 = __webpack_require__("./src/app/thread/thread.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var vueprof_component_1 = __webpack_require__("./src/app/vueprof/vueprof.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'anime/:title', component: summoner_component_1.SummonerComponent },
    { path: 'board', component: board_component_1.BoardComponent },
    { path: 'thread/:threadname', component: thread_component_1.ThreadComponent },
    { path: 'profile/me', component: profile_component_1.ProfileComponent },
    { path: 'profile/:user', component: vueprof_component_1.VueprofComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var angularfire2_1 = __webpack_require__("./node_modules/angularfire2/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var summoner_component_1 = __webpack_require__("./src/app/summoner/summoner.component.ts");
var summoners_service_1 = __webpack_require__("./src/app/summoners.service.ts");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var board_component_1 = __webpack_require__("./src/app/board/board.component.ts");
var thread_component_1 = __webpack_require__("./src/app/thread/thread.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var vueprof_component_1 = __webpack_require__("./src/app/vueprof/vueprof.component.ts");
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
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                summoner_component_1.SummonerComponent,
                board_component_1.BoardComponent,
                thread_component_1.ThreadComponent,
                profile_component_1.ProfileComponent,
                vueprof_component_1.VueprofComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatDialogModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig),
                auth_1.AngularFireAuthModule,
                database_1.AngularFireDatabaseModule,
                http_1.HttpClientModule,
            ],
            providers: [auth_service_1.AuthService, summoners_service_1.SummonersService],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [login_component_1.LoginComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
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
            .catch(function (error) {
            alert(error);
        });
    };
    AuthService.prototype.emailSignup = function (email, password, username) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            _this.db.object("profiles/" + email.replace(/\./g, '%2E')).set({ "Bio": "N/A", "Username": username });
            _this.router.navigateByUrl('/');
        })
            .catch(function (error) {
            alert(error);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase, auth_1.AngularFireAuth, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/board/board.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align:center;\n    margin-top:1%;\n}\n\nh2{\n    text-align: center;\n}\n\ninput{\n    color:#9b9b9b;\n}\n\n.threadpick{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\n.threadpick:hover{\n    background-color: #111;\n    cursor: pointer;\n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.threads{\n    margin-top:1%;\n}\n\n#threadcontainer{\n    margin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\na:hover{\n    background-color: #111;\n}\n\n#login{\n    position:fixed;\n    right:0px;\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><div (click)=\"goBoards()\">Boards</div></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><div (click)=\"goMe()\">Profile</div></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><div (click)=\"goLogin()\">Login</div></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<h1>AniRec</h1>\n<div *ngIf=\"afAuth.authState | async as user;\" id=\"boardoptions\">\n\t<div id=\"threadcontainer\">\n\t\t<input [(ngModel)]=\"newThreadName\" name=\"newthread\" placeholder=\"Name of Thread...\"/><br>\n\t\t<button class =\"btn btn-success\" (click)=\"newThread(user.email)\">Create</button>\n\t</div>\n</div>\n<div *ngIf=\"isAdmin==true\">\n\t<div id=\"threadcontainer\">\n\t\t<input [(ngModel)]=\"toDelete\" name=\"newthread\" placeholder=\"Delete Thread\"/><br>\n\t\t<button class =\"btn btn-danger\" (click)=\"deleteThread()\">Delete</button>\n\t</div>\n</div>\n<h2>Threads</h2>\n<div class=\"threads\" *ngFor=\"let thread of threadsArray\">\n\t<a href=\"./thread/{{thread}}\">{{thread}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var BoardComponent = /** @class */ (function () {
    function BoardComponent(router, afAuth, authService, db) {
        this.router = router;
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
    BoardComponent.prototype.goBoards = function () {
        this.router.navigateByUrl('/board');
    };
    BoardComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    BoardComponent.prototype.goMe = function () {
        this.router.navigateByUrl('/profile/me');
    };
    BoardComponent.prototype.goThread = function (thread) {
        this.router.navigateByUrl('/thread/' + thread);
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
        core_1.Component({
            selector: 'app-board',
            template: __webpack_require__("./src/app/board/board.component.html"),
            styles: [__webpack_require__("./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_1.AngularFireAuth, auth_service_1.AuthService, database_1.AngularFireDatabase])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\n.ui-helper-hidden-accessible { \n  display:none; \n  position: absolute; left:-999em;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\nh1{\n    margin-top:15%;\n    margin-bottom:2%;\n    margin-right:auto;\n    margin-left:auto;\n    text-align: center;\n    font-size:75px;\n}\n\n#login{\n    position:fixed;\n    right:0px;\n}\n\n.search-summoner{\n    text-align:center;\n}\n\n.search-summoner input{\n    display: block;\n    width: 35%;\n    padding: 15px 150px 18px 17px;\n    border: none;\n    font-size: 15px;\n    color: #9b9b9b;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.25);\n            box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.25);\n    margin:auto auto;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><div (click)=\"goBoards()\">Boards</div></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><div (click)=\"goMe()\">Profile</div></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><div (click)=\"goLogin()\">Login</div></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<h1>AniRec</h1>\n<form id=\"summonersubmit\" class=\"search-summoner\">\n    <input id=\"search\" type=\"text\" name=\"username\" placeholder=\"Search Anime\"/>\n</form>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
        this.allAnime = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var that = this;
        $.get('./api/allanime', function (data) {
            for (var key in data) {
                that.allAnime.push(key);
            }
            $("#search").autocomplete({
                source: function (request, response) {
                    request.term = request.term.charAt(0).toUpperCase() + request.term.slice(1);
                    var results = $.ui.autocomplete.filter(that.allAnime, request.term);
                    var correctedResults = [];
                    var alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', '!', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                        'V', 'W', 'X', 'Y', 'Z'];
                    if (results.length > 10) {
                        for (var i = results.length - 1; i >= 0; i--) {
                            if (request.term == results[i]) {
                                correctedResults.push(results[i]);
                            }
                        }
                        for (var z = 0; z < alphabet.length; z++) {
                            for (var k = results.length - 1; k >= 0; k--) {
                                if (request.term.length < results[k].length) {
                                    if (request.term + alphabet[z] == results[k].substring(0, request.term.length + 1)) {
                                        correctedResults.push(results[k]);
                                    }
                                    if (correctedResults.length == 10) {
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
        var routerRef = this.router;
        $('#summonersubmit').keypress(function (e) {
            var code = e.keyCode;
            if (code === 13) {
                var search = $('#search').val();
                routerRef.navigate(['anime', search]);
                $('#summonersubmit').submit();
            }
        });
        $("#summonersubmit").submit(function (e) {
            e.preventDefault();
        });
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HomeComponent.prototype.goBoards = function () {
        this.router.navigateByUrl('/board');
    };
    HomeComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.goMe = function () {
        this.router.navigateByUrl('/profile/me');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_1.AngularFireAuth, auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".loginform{\n\tmargin-top:2%;\n    margin-right:auto;\n    margin-left:auto;\n\ttext-align:center;\n\tmin-width: 400px; \n\tmax-width: 400px;\n\tmin-height: 325px;\n\tmax-height: 325px; \n\tbackground-color:#0b254f;\n\tborder-radius: 2%;\n   \tborder:5px solid #cec32f;\n}\n\n.loginform button{\n\tmargin: 10px 10px 10px 10px ;\n}\n\n.loginform input{\n\tborder:none;\n\tdisplay: block;\n    width: 40%;\n    font-size: 15px;\n    color: #9b9b9b;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    margin:auto auto;\n}\n\n.container:{\n\ttext-align:center;\n\tmargin:20px auto;\n}\n\n#login-container{\n\tmargin-top:10%;\n}\n\nh1{\n\tmargin-top:10%;\n\tmargin-bottom:5%;\n\ttext-align:center;\n\tfont-size:100px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>AniRec</h1>\n<form class=\"loginform\">\n\t<div id=\"login-container\">\t\n\t\tEmail:<br>\n\t \t<input [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\"/><br>\n\t \tPassword:<br>\n\t  \t<input [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\"/><br>\n\t  \tUsername:<br>\n\t  \t<input [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username (Sign up only)\"/><br>\n\t  \t<button class =\"btn btn-success\" (click)=login()>Login</button>\n\t  \t<button class =\"btn btn-success\" (click)=register()>Register</button>\n\t</div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
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
        if (this.email != "" && this.password != "" && this.username != "") {
            this.authService.emailSignup(this.email, this.password, this.username);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align:center;\n    margin-top:1%;\n}\n\nh2{\n    text-align: center;\n}\n\nh3{\n    margin-top:4%;\n    margin-left:2%;\n}\n\ninput{\n    color:#9b9b9b;\n    width:20%;\n    margin-bottom: 1.5%;\n}\n\ntextarea{\n    color:#9b9b9b;\n    width:20%; \n}\n\n.igncontainer{\n    margin-left:5%;   \n}\n\n.selectjson{\n    margin-left:5%;\n    margin-top:2%;\n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.threads{\n    margin-top:1%;\n}\n\n#threadcontainer{\n    margin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\na:hover{\n    background-color: #111;\n}\n\n#login{\n    position:fixed;\n    right:0px;\n}\n\n.row {\n  min-width:100px;\n  margin-left:1%;\n  margin-top:3%;\n}\n\n.card {\n  float: left;\n  padding: 0 1.2rem;\n  width: 20%;\n  color: #9b9b9b;\n}\n\n.card .menu-content {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.card .menu-content::before, .card .menu-content::after {\n  content: '';\n  display: table;\n}\n\n.card .menu-content::after {\n  clear: both;\n}\n\n.card .menu-content li {\n  display: inline-block;\n}\n\n.card .menu-content a {\n  color: #fff;\n}\n\n.card .menu-content span {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  font-size: 10px;\n  font-weight: 700;\n  font-family: 'Open Sans';\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n\n.card .wrapper {\n  background-color: #fff;\n  min-height:200px;\n  min-width:200px;\n  max-width:200px;\n  position: relative;\n  overflow: hidden;\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n\n.card .wrapper:hover .data {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.card .data {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  -webkit-transform: translateY(calc(70px + 1em));\n          transform: translateY(calc(70px + 1em));\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.card .data .content {\n  padding: 1em;\n  position: relative;\n  z-index: 1;\n}\n\n.card .author {\n  font-size: 12px;\n}\n\n.card .title {\n  margin-top: 10px;\n  max-height: 50px;\n  min-height: 50px;\n}\n\n.card .text {\n  height: 70px;\n  margin: 0;\n}\n\n.card input[type='checkbox'] {\n  display: none;\n}\n\n.card input[type='checkbox']:checked + .menu-content {\n  -webkit-transform: translateY(-60px);\n          transform: translateY(-60px);\n}\n\n.example-1 .wrapper {\n  background: url(https://hd.unsplash.com/photo-1463415268136-e52a5af54519) center/cover no-repeat;\n}\n\n.example-1 .date {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #77d7b9;\n  color: #fff;\n  padding: 0.8em;\n}\n\n.example-1 .date span {\n  display: block;\n  text-align: center;\n}\n\n.example-1 .date .day {\n  font-weight: 700;\n  font-size: 24px;\n  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18);\n}\n\n.example-1 .date .month {\n  text-transform: uppercase;\n}\n\n.example-1 .date .month,\n.example-1 .date .year {\n  font-size: 12px;\n}\n\n.example-1 .content {\n  background-color: #fff;\n  -webkit-box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);\n}\n\n.example-1 .title a {\n  color: gray;\n}\n\n.example-1 .menu-button {\n  position: absolute;\n  z-index: 999;\n  top: 16px;\n  right: 16px;\n  width: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.example-1 .menu-button span {\n  width: 5px;\n  height: 5px;\n  background-color: gray;\n  color: gray;\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n}\n\n.example-1 .menu-button span::after, .example-1 .menu-button span::before {\n  content: '';\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: currentColor;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.example-1 .menu-button span::before {\n  left: -10px;\n}\n\n.example-1 .menu-button span::after {\n  right: -10px;\n}\n\n.example-1 .menu-content {\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.example-1 .menu-content li {\n  width: 33.333333%;\n  float: left;\n  background-color: #77d7b9;\n  height: 60px;\n  position: relative;\n}\n\n.example-1 .menu-content a {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 24px;\n}\n\n.example-1 .menu-content span {\n  top: -10px;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n\t<ul class=\"horizontal\">\n\t  <li><a href=\"./\">AniRec</a></li>\n\t  <li><div (click)=\"goBoards()\">Boards</div></li>\n\t  <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n\t  <li *ngIf=\"afAuth.authState | async as user\"><div (click)=\"goMe()\">Profile</div></li>\n\t  <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n\t  <ng-template #showLogin>\n\t  \t<li id=\"login\"><div (click)=\"goLogin()\">Login</div></li>\n\t  </ng-template>\n\t</ul> \n<div>\n<div *ngIf=\"loggedInData;else login\">\n\t<h2>{{loggedInData.Username}}</h2>\n\t<div class=\"igncontainer\">\n\t\tIGN: <input [(ngModel)]=\"loggedInData.IGN\" name=\"newthread\" placeholder=\"Name of Thread...\"/>\n\t\t<button class =\"btn btn-success\" (click)=\"updateIgn()\">Update</button>\n\t</div>\n\t<div class=\"igncontainer\">\n\t\tBio: <textarea id=\"commentbox\" [(ngModel)]=\"loggedInData.Bio\" name=\"newthread\" placeholder=\"Comment...\"></textarea><br>\n\t\t<button class =\"btn btn-success\" (click)=\"updateBio()\">Update</button>\n\t</div>\n\t<div class=\"selectjson\">\n\t\t<input type=\"file\" id=\"files\" name=\"files[]\"/>\n\t\t<button class =\"btn btn-success\" (click)=\"uploadJson()\">Upload Json</button>\n\t</div>\n</div>\n<ng-template #login>Please Log In...</ng-template>\n<h3>Your Personal Recommendations</h3>\n<div class=\"row\">\n  <div class=\"example-1 card\">\n\t<div class=\"wrapper\" >\n\t      <div class=\"data\">\n\t        <div class=\"content\">\n\t          <h1 class=\"title\">{{title}}</h1>\n\t          <p class=\"text\">Fill.</p>\n\t          <label for=\"show-menu\" class=\"menu-button\"></label>\n\t        </div>\n\t        <input type=\"checkbox\" id=\"show-menu\" />\n\t        <ul class=\"menu-content\">\n\t          <li>\n\t            <a href=\"#\" class=\"fa fa-bookmark-o\"></a>\n\t          </li>\n\t          <li><a href=\"#\" class=\"fa fa-heart-o\"><span>47</span></a></li>\n\t          <li><a href=\"#\" class=\"fa fa-comment-o\"><span>8</span></a></li>\n\t        </ul>\n\t      </div>\n\t    </div>\n\t</div>\n\t<div class=\"example-1 card\">\n\t<div class=\"wrapper\" style=\"background:url(https://myanimelist.cdn-dena.com/images/anime/4/25073.jpg) 20% 1% / cover no-repeat;\">\n\t      <div class=\"data\">\n\t        <div class=\"content\">\n\t          <h1 class=\"title\">{{title}}</h1>\n\t          <p class=\"text\">Fill.</p>\n\t          <label for=\"show-menu\" class=\"menu-button\"></label>\n\t        </div>\n\t        <input type=\"checkbox\" id=\"show-menu\" />\n\t        <ul class=\"menu-content\">\n\t          <li>\n\t            <a href=\"#\" class=\"fa fa-bookmark-o\"></a>\n\t          </li>\n\t          <li><a href=\"#\" class=\"fa fa-heart-o\"><span>47</span></a></li>\n\t          <li><a href=\"#\" class=\"fa fa-comment-o\"><span>8</span></a></li>\n\t        </ul>\n\t      </div>\n\t    </div>\n\t</div>\n\t<div class=\"example-1 card\">\n\t<div class=\"wrapper\" style=\"background:url(https://myanimelist.cdn-dena.com/images/anime/4/25073.jpg) 20% 1% / cover no-repeat;\">\n\t      <div class=\"data\">\n\t        <div class=\"content\">\n\t          <h1 class=\"title\">{{title}}</h1>\n\t          <p class=\"text\">Fill.</p>\n\t          <label for=\"show-menu\" class=\"menu-button\"></label>\n\t        </div>\n\t        <input type=\"checkbox\" id=\"show-menu\" />\n\t        <ul class=\"menu-content\">\n\t          <li>\n\t            <a href=\"#\" class=\"fa fa-bookmark-o\"></a>\n\t          </li>\n\t          <li><a href=\"#\" class=\"fa fa-heart-o\"><span>47</span></a></li>\n\t          <li><a href=\"#\" class=\"fa fa-comment-o\"><span>8</span></a></li>\n\t        </ul>\n\t      </div>\n\t    </div>\n\t</div>\n\t<div class=\"example-1 card\">\n\t<div class=\"wrapper\" style=\"background:url(https://myanimelist.cdn-dena.com/images/anime/4/25073.jpg) 20% 1% / cover no-repeat;\">\n\t      <div class=\"data\">\n\t        <div class=\"content\">\n\t          <h1 class=\"title\">{{title}}</h1>\n\t          <p class=\"text\">Fill.</p>\n\t          <label for=\"show-menu\" class=\"menu-button\"></label>\n\t        </div>\n\t        <input type=\"checkbox\" id=\"show-menu\" />\n\t        <ul class=\"menu-content\">\n\t          <li>\n\t            <a href=\"#\" class=\"fa fa-bookmark-o\"></a>\n\t          </li>\n\t          <li><a href=\"#\" class=\"fa fa-heart-o\"><span>47</span></a></li>\n\t          <li><a href=\"#\" class=\"fa fa-comment-o\"><span>8</span></a></li>\n\t        </ul>\n\t      </div>\n\t    </div>\n\t</div>\n\t<div class=\"example-1 card\">\n\t<div class=\"wrapper\" style=\"background:url(https://myanimelist.cdn-dena.com/images/anime/4/25073.jpg) 20% 1% / cover no-repeat;\">\n\t      <div class=\"data\">\n\t        <div class=\"content\">\n\t          <h1 class=\"title\">{{title}}</h1>\n\t          <p class=\"text\">Fill.</p>\n\t          <label for=\"show-menu\" class=\"menu-button\"></label>\n\t        </div>\n\t        <input type=\"checkbox\" id=\"show-menu\" />\n\t        <ul class=\"menu-content\">\n\t          <li>\n\t            <a href=\"#\" class=\"fa fa-bookmark-o\"></a>\n\t          </li>\n\t          <li><a href=\"#\" class=\"fa fa-heart-o\"><span>47</span></a></li>\n\t          <li><a href=\"#\" class=\"fa fa-comment-o\"><span>8</span></a></li>\n\t        </ul>\n\t      </div>\n\t    </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, afAuth, authService, db) {
        this.router = router;
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
    ProfileComponent.prototype.uploadJson = function () {
        var selection = document.getElementById('files');
        if (selection.files.length > 0) {
            var file = selection.files[0];
            var fr = new FileReader();
            fr.onload = this.receivedText;
            fr.readAsText(file);
        }
    };
    ProfileComponent.prototype.receivedText = function (e) {
        var lines = e.target.result;
        var readJSON = lines;
        console.log(readJSON);
        $.ajax({
            type: "POST",
            url: '/api/predictRating',
            contentType: "application/json",
            dataType: "json",
            data: readJSON,
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ProfileComponent.prototype.goBoards = function () {
        this.router.navigateByUrl('/board');
    };
    ProfileComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    ProfileComponent.prototype.goMe = function () {
        this.router.navigateByUrl('/profile/me');
    };
    ProfileComponent.prototype.updateBio = function () {
        this.db.object("profiles/" + this.loggedInUser.replace(/\./g, '%2E') + "/Bio").set(this.loggedInData.Bio);
    };
    ProfileComponent.prototype.updateIgn = function () {
        this.db.object("profiles/" + this.loggedInUser.replace(/\./g, '%2E') + "/IGN").set(this.loggedInData.IGN);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_1.AngularFireAuth, auth_service_1.AuthService, database_1.AngularFireDatabase])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/summoner/summoner.component.css":
/***/ (function(module, exports) {

module.exports = "\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nh1{\n    text-align: center;\n}\n\n.rectitle{\n    margin-top:5%;\n    margin-bottom:3.5%;\n}\n\n.ui-helper-hidden-accessible { \n  display:none; \n}\n\n.progress{\n    width:25%;\n    margin-left:auto;\n    margin-right:auto;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\n#login{\n    position:fixed;\n    right:0px;\n}\n\n#userinfo{\n    margin-left:2.5%;\n}\n\n#duopercentage{\n    margin-bottom: 2%;\n}\n\n.row {\n  min-width:100px;\n  margin-left:1%;\n}\n\n.card {\n  float: left;\n  padding: 0 1.2rem;\n  width: 20%;\n  color: #9b9b9b;\n}\n\n.card .menu-content {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.card .menu-content::before, .card .menu-content::after {\n  content: '';\n  display: table;\n}\n\n.card .menu-content::after {\n  clear: both;\n}\n\n.card .menu-content li {\n  display: inline-block;\n}\n\n.card .menu-content a {\n  color: #fff;\n}\n\n.card .menu-content span {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  font-size: 10px;\n  font-weight: 700;\n  font-family: 'Open Sans';\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n\n.card .wrapper {\n  background-color: #fff;\n  min-height: 400px;\n  min-width:200px;\n  max-width:200px;\n  position: relative;\n  overflow: hidden;\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n\n.card .wrapper:hover .data {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.card .data {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  -webkit-transform: translateY(calc(70px + 1em));\n          transform: translateY(calc(70px + 1em));\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.card .data .content {\n  padding: 1em;\n  position: relative;\n  z-index: 1;\n}\n\n.card .author {\n  font-size: 12px;\n}\n\n.card .title {\n  margin-top: 10px;\n  max-height: 150px;\n  min-height: 150px;\n}\n\n.card .text {\n  height: 70px;\n  margin: 0;\n}\n\n.card input[type='checkbox'] {\n  display: none;\n}\n\n.card input[type='checkbox']:checked + .menu-content {\n  -webkit-transform: translateY(-60px);\n          transform: translateY(-60px);\n}\n\n.example-1 .wrapper {\n  background: url(https://hd.unsplash.com/photo-1463415268136-e52a5af54519) center/cover no-repeat;\n}\n\n.example-1 .date {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #77d7b9;\n  color: #fff;\n  padding: 0.8em;\n}\n\n.example-1 .date span {\n  display: block;\n  text-align: center;\n}\n\n.example-1 .date .day {\n  font-weight: 700;\n  font-size: 24px;\n  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18);\n}\n\n.example-1 .date .month {\n  text-transform: uppercase;\n}\n\n.example-1 .date .month,\n.example-1 .date .year {\n  font-size: 12px;\n}\n\n.example-1 .content {\n  background-color: #fff;\n  -webkit-box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);\n}\n\n.example-1 .title a {\n  color: gray;\n}\n\n.example-1 .menu-button {\n  position: absolute;\n  z-index: 999;\n  top: 16px;\n  right: 16px;\n  width: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.example-1 .menu-button span {\n  width: 5px;\n  height: 5px;\n  background-color: gray;\n  color: gray;\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n}\n\n.example-1 .menu-button span::after, .example-1 .menu-button span::before {\n  content: '';\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: currentColor;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.example-1 .menu-button span::before {\n  left: -10px;\n}\n\n.example-1 .menu-button span::after {\n  right: -10px;\n}\n\n.example-1 .menu-content {\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.example-1 .menu-content li {\n  width: 33.333333%;\n  float: left;\n  background-color: #77d7b9;\n  height: 60px;\n  position: relative;\n}\n\n.example-1 .menu-content a {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 24px;\n}\n\n.example-1 .menu-content span {\n  top: -10px;\n}\n"

/***/ }),

/***/ "./src/app/summoner/summoner.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n  <ul class=\"horizontal\">\n    <li><a href=\"./\">AniRec</a></li>\n    <li><div (click)=\"goBoards()\">Boards</div></li>\n    <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n    <li *ngIf=\"afAuth.authState | async as user\"><div (click)=\"goMe()\">Profile</div></li>\n    <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n    <ng-template #showLogin>\n      <li id=\"login\"><div (click)=\"goLogin()\">Login</div></li>\n    </ng-template>\n  </ul> \n<div>\n<div class=\"rectitle\">\n    <h1>Your Recommendations</h1>\n</div>\n<div *ngIf=\"similarTitles; let similarTitles; else loading\" class=\"row\">\n  <div *ngFor=\"let title of similarTitles\" class=\"example-1 card\">\n    <div class=\"wrapper\" style=\"background:{{sanitizeImage(title.url)}} 20% 1% / cover no-repeat;\">\n      <div class=\"data\">\n        <div class=\"content\">\n          <h1 class=\"title\">{{title}}</h1>\n          <p class=\"text\">Fill.</p>\n          <label for=\"show-menu\" class=\"menu-button\"></label>\n        </div>\n        <input type=\"checkbox\" id=\"show-menu\" />\n        <ul class=\"menu-content\">\n          <li>\n            <a href=\"#\" class=\"fa fa-bookmark-o\"></a>\n          </li>\n          <li><a href=\"#\" class=\"fa fa-heart-o\"><span>47</span></a></li>\n          <li><a href=\"#\" class=\"fa fa-comment-o\"><span>8</span></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #loading>Loading Anime Data...</ng-template>"

/***/ }),

/***/ "./src/app/summoner/summoner.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var summoners_service_1 = __webpack_require__("./src/app/summoners.service.ts");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var SummonerComponent = /** @class */ (function () {
    function SummonerComponent(_sanitizer, router, authService, afAuth, dataService, db, route, location) {
        this._sanitizer = _sanitizer;
        this.router = router;
        this.authService = authService;
        this.afAuth = afAuth;
        this.dataService = dataService;
        this.db = db;
        this.route = route;
        this.location = location;
        this.sanitizedImages = [];
    }
    SummonerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animeTitle = this.route.snapshot.paramMap.get('title');
        $('.ui-helper-hidden-accessible').remove();
        $.get('./api/simAnime/' + this.animeTitle, function (data) {
            _this.similarTitles = data['results'];
        });
    };
    SummonerComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle('url(' + image + ')');
    };
    SummonerComponent.prototype.goBoards = function () {
        this.router.navigateByUrl('/board');
    };
    SummonerComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    SummonerComponent.prototype.goMe = function () {
        this.router.navigateByUrl('/profile/me');
    };
    SummonerComponent.prototype.logout = function () {
        this.authService.logout();
    };
    SummonerComponent = __decorate([
        core_1.Component({
            selector: 'app-summoner',
            template: __webpack_require__("./src/app/summoner/summoner.component.html"),
            styles: [__webpack_require__("./src/app/summoner/summoner.component.css")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, router_2.Router, auth_service_1.AuthService, auth_1.AngularFireAuth, summoners_service_1.SummonersService, database_1.AngularFireDatabase, router_1.ActivatedRoute, common_1.Location])
    ], SummonerComponent);
    return SummonerComponent;
}());
exports.SummonerComponent = SummonerComponent;


/***/ }),

/***/ "./src/app/summoners.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var SummonersService = /** @class */ (function () {
    function SummonersService(db) {
        this.db = db;
    }
    SummonersService.prototype.getSummonerInfo = function (summonerUsername) {
        console.log(summonerUsername);
    };
    SummonersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], SummonersService);
    return SummonersService;
}());
exports.SummonersService = SummonersService;


/***/ }),

/***/ "./src/app/thread/thread.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align:center;\n    margin-top:1%;\n}\n\nh2{\n    text-align: center;\n}\n\n.profpick{\n    color:white;\n    display:inline;\n}\n\n.profpick:hover{\n    color: #4286f4;\n    text-decoration: none;\n    cursor:pointer;\n    display:inline;\n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.comment{\n    margin-left:2%;\n    margin-top:1%;\n}\n\n.threads{\n    margin-top:1%;\n}\n\n#threadcontainer{\n    margin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n    color:white;\n}\n\na:hover{\n    color: #4286f4;\n    text-decoration: none;\n}\n\n#login{\n    position:fixed;\n    right:0px;\n}\n\n#commentbox{\n    width:25%;\n}"

/***/ }),

/***/ "./src/app/thread/thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n  <ul class=\"horizontal\">\n    <li><a href=\"./\">AniRec</a></li>\n    <li><div (click)=\"goBoards()\">Boards</div></li>\n    <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n    <li *ngIf=\"afAuth.authState | async as user\"><div (click)=\"goMe()\">Profile</div></li>\n    <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n    <ng-template #showLogin>\n      <li id=\"login\"><div (click)=\"goLogin()\">Login</div></li>\n    </ng-template>\n  </ul> \n<div>\n<h2>{{threadName}}</h2>\n<div *ngIf=\"afAuth.authState | async as user;\" id=\"boardoptions\">\n\t<div id=\"threadcontainer\">\n\t\t<textarea id=\"commentbox\" [(ngModel)]=\"commentText\" name=\"newthread\" placeholder=\"Comment...\"></textarea><br>\n\t\t<button class =\"btn btn-success\" (click)=\"comment(user.email)\">Create</button>\n\t</div>\n</div>\n<div class=\"comment\" *ngFor=\"let comment of commentName; let i = index\">\n\t<a href=\"./profile/{{comment}}\">{{comment}}</a> : {{commentInfo[i]}}\n</div>"

/***/ }),

/***/ "./src/app/thread/thread.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ThreadComponent = /** @class */ (function () {
    function ThreadComponent(router, afAuth, authService, db, route) {
        this.router = router;
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
    ThreadComponent.prototype.goBoards = function () {
        this.router.navigateByUrl('/board');
    };
    ThreadComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    ThreadComponent.prototype.goMe = function () {
        this.router.navigateByUrl('/profile/me');
    };
    ThreadComponent.prototype.goProfile = function (prof) {
        this.router.navigateByUrl('/profile/' + prof);
    };
    ThreadComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ThreadComponent = __decorate([
        core_1.Component({
            selector: 'app-thread',
            template: __webpack_require__("./src/app/thread/thread.component.html"),
            styles: [__webpack_require__("./src/app/thread/thread.component.css")]
        }),
        __metadata("design:paramtypes", [router_2.Router, auth_1.AngularFireAuth, auth_service_1.AuthService, database_1.AngularFireDatabase, router_1.ActivatedRoute])
    ], ThreadComponent);
    return ThreadComponent;
}());
exports.ThreadComponent = ThreadComponent;


/***/ }),

/***/ "./src/app/vueprof/vueprof.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align:center;\n    margin-top:1%;\n}\n\nh2{\n    text-align: center;\n}\n\ninput{\n    color:#9b9b9b;\n    width:10%;\n    margin-bottom: 1.5%;\n}\n\ntextarea{\n    color:#9b9b9b;\n    width:20%; \n\n}\n\n.igncontainer{\n    margin-left:5%;   \n}\n\n.board{\n    background-color: #2f4357;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    width:100%;\n    margin-top:2%;\n}\n\n.threads{\n    margin-top:1%;\n}\n\n#threadcontainer{\n    margin-left:2%;\n}\n\n.horizontal{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    width:100%;\n}\n\nul{\n    width:100%;\n    margin-left: 0px;\n    margin-right:0px;\n}\n\nli {\n    float: left;\n}\n\nli div{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli div:hover{\n    background-color: #111;\n    cursor:pointer;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111;\n}\n\na{\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\na:hover{\n    background-color: #111;\n}\n\n#login{\n    position:fixed;\n    right:0px;\n}\n\n.profileview{\n    margin-left:1.5%;\n}"

/***/ }),

/***/ "./src/app/vueprof/vueprof.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"what\">\n  <ul class=\"horizontal\">\n    <li><a href=\"./\">AniRec</a></li>\n    <li><div (click)=\"goBoards()\">Boards</div></li>\n    <li><a href=\"https://www.reddit.com/r/anime/\">News</a></li>\n    <li *ngIf=\"afAuth.authState | async as user\"><div (click)=\"goMe()\">Profile</div></li>\n    <li *ngIf=\"afAuth.authState | async as user; else showLogin\"><div (click)=\"logout()\" id=\"login\">Logout</div></li>\n    <ng-template #showLogin>\n      <li id=\"login\"><div (click)=\"goLogin()\">Login</div></li>\n    </ng-template>\n  </ul> \n<div>\n<div *ngIf=\"data\">\n\t<div class=\"profileview\">\n\t\t<h2>{{email}}</h2>\n\t\tIGN: {{data.IGN}} <br>\n\t\tBio: {{data.Bio}}\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/vueprof/vueprof.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/auth.service.ts");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var VueprofComponent = /** @class */ (function () {
    function VueprofComponent(router, afAuth, authService, db, route) {
        this.router = router;
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
    VueprofComponent.prototype.goBoards = function () {
        this.router.navigateByUrl('/board');
    };
    VueprofComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    VueprofComponent.prototype.goMe = function () {
        this.router.navigateByUrl('/profile/me');
    };
    VueprofComponent = __decorate([
        core_1.Component({
            selector: 'app-vueprof',
            template: __webpack_require__("./src/app/vueprof/vueprof.component.html"),
            styles: [__webpack_require__("./src/app/vueprof/vueprof.component.css")]
        }),
        __metadata("design:paramtypes", [router_2.Router, auth_1.AngularFireAuth, auth_service_1.AuthService, database_1.AngularFireDatabase, router_1.ActivatedRoute])
    ], VueprofComponent);
    return VueprofComponent;
}());
exports.VueprofComponent = VueprofComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map