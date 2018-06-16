(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    // Add Application Routes To The Array Below
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
        // Add Application Routes To The Array Below
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<eg-navbar></eg-navbar>\n<div class=\"height-adjust\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n\n<eg-footer></eg-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height-adjust {\n  padding-top: 58px;\n  padding-bottom: 67px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eg';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Core Module Imports





// Application Component Imports








// Core Application Services





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('id_token');
                        },
                        whitelistedDomains: ['http://localhost:4200']
                    }
                })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\">Dashboard</h2>\n    <p>Welcome to you personal Dashboard</p>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row align-items-center flex-row-reverse\">\n            <div class=\"col-auto ml-lg-auto\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-auto\">\n                        <ul class=\"list-inline list-inline-dots mb-0\">\n                            <li class=\"list-inline-item\">\n                                <a href=\"https://github.com/EadsGraphic/mean-stack-authentication\">Documentation</a>\n                            </li>\n                            <li class=\"list-inline-item\">\n                                <a target=\"_blank\"\n                                    href=\"https://github.com/EadsGraphic/mean-stack-authentication/wiki\">FAQ</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-auto\">\n                        <a target=\"_blank\"\n                            href=\"https://github.com/EadsGraphic/mean-stack-authentication\"\n                            class=\"btn btn-outline-primary btn-sm\">Source code</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\n                Copyright © 2018 App by\n                <a href=\"https://www.linkedin.com/in/teads/\"\n                    target=\"_blank\">Tyler Eads</a>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n    <section class=\"section\">\n        <h2 class=\"section-title\">The mean stack?</h2>\n        <p class=\"section-description\">\n            The Friendly & Fun Fullstack javascript framework\n        </p>\n        <div class=\"features\">\n            <div class=\"feature\">\n                <div class=\"feature-image\">\n                    <img src=\"../../assets/images/landing-page/mongodb-icon.jpg\"\n                        alt=\"\">\n                </div>\n                <div class=\"feature-description\">\n                    <h3 class=\"feature-name\">MongoDB</h3>\n                    <p>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.</p>\n                    <div class=\"mt-5\">\n                        <a class=\"btn btn-small btn-outline-dark\"\n                            href=\"https://www.mongodb.com/\"\n                            role=\"button\">More <i class=\"ion ion-arrow-right-c\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"feature\">\n                <div class=\"feature-image\">\n                    <img src=\"../../assets/images/landing-page/expressjs-icon.jpg\"\n                        alt=\"\">\n                </div>\n                <div class=\"feature-description\">\n                    <h3 class=\"feature-name\">Express.JS</h3>\n                    <p>Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.</p>\n                    <div class=\"mt-5\">\n                        <a class=\"btn btn-small btn-outline-dark\"\n                            href=\"https://expressjs.com/\"\n                            role=\"button\">More <i class=\"ion ion-arrow-right-c\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"feature\">\n                <div class=\"feature-image\">\n                    <img src=\"../../assets/images/landing-page/angular-icon.jpg\"\n                        alt=\"\">\n                </div>\n                <div class=\"feature-description\">\n                    <h3 class=\"feature-name\">Angular</h3>\n                    <p>Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations.</p>\n                    <div class=\"mt-5\">\n                        <a class=\"btn btn-small btn-outline-dark\"\n                            href=\"https://angular.io/\"\n                            role=\"button\">More <i class=\"ion ion-arrow-right-c\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"feature\">\n                <div class=\"feature-image\">\n                    <img src=\"../../assets/images/landing-page/nodejs-icon.jpg\"\n                        alt=\"\">\n                </div>\n                <div class=\"feature-description\">\n                    <h3 class=\"feature-name\">Node.JS</h3>\n                    <p>Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side to produce dynamic content before the page is sent to the user's browser.</p>\n                    <div class=\"mt-5\">\n                        <a class=\"btn btn-small btn-outline-dark\"\n                            href=\"https://nodejs.org/en/\"\n                            role=\"button\">More <i class=\"ion ion-arrow-right-c\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"section section-action\">\n        <h2 class=\"section-title\">Want to try our app?</h2>\n        <p class=\"section-description\">\n            Test out the full stack application today for free!</p>\n        <div class=\"mt-4\">\n            <a href=\"https://github.com/EadsGraphic/mean-stack-authentication\"\n                class=\"btn btn-green\"\n                target=\"_blank\">Source Code</a>\n            <a class=\"btn btn-outline ml-2\"\n                [routerLink]=\"['/register']\">Register</a>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\n  background-color: #fff; }\n\n.section {\n  padding: 5rem 0;\n  display: block; }\n\n.section-title {\n  text-align: center;\n  margin: 0 0 2rem;\n  font-size: 2rem;\n  font-weight: 500; }\n\n.section-description {\n  text-align: center;\n  color: #8d96a7;\n  margin: -1.5rem auto 3rem;\n  max-width: 48rem;\n  font-size: 1.125rem; }\n\n.feature {\n  flex-direction: row;\n  text-align: left;\n  max-width: 60rem;\n  display: flex;\n  align-items: center;\n  margin: 0 auto 4rem; }\n\n.feature-name {\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: #4A4A4A;\n  margin: 0 0 .5rem; }\n\n.feature-image {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.feature-image img {\n  max-width: 100%; }\n\n.feature-description {\n  padding: 0 2rem 0;\n  flex: 1;\n  color: #656f83; }\n\n.section-action {\n  background: linear-gradient(to right, #1488cc, #2b32b2);\n  color: #fff;\n  text-align: center;\n  padding-top: 4rem;\n  padding-bottom: 4rem; }\n\n.section-action .section-description {\n  color: #fff; }\n\n.section-description {\n  text-align: center;\n  color: #8d96a7;\n  margin: -1.5rem auto 3rem;\n  max-width: 48rem;\n  font-size: 1.125rem; }\n\n.btn-outline {\n  background: transparent;\n  color: #fff;\n  border-color: #fff; }\n\n.btn {\n  display: inline-block;\n  border-radius: 80px;\n  padding: 0 2rem;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 3;\n  color: #fff;\n  border: 1px solid transparent; }\n\n.ml-2 {\n  margin-left: 0.75rem !important; }\n\na,\na:active,\na:focus,\na:hover,\na:visited {\n  text-decoration: none; }\n\n.btn-small {\n  line-height: 2rem;\n  padding: 0 1rem;\n  font-size: 0.875rem;\n  font-weight: 500; }\n\n.btn-outline-dark {\n  background: transparent;\n  color: #656f83;\n  border: 1px solid #656f83; }\n\n.btn {\n  display: inline-block;\n  border-radius: 80px;\n  border: 1px solid transparent;\n  transition: .3s background, .3s border-color, .3s color; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss"), __webpack_require__(/*! ./tabler-io.css */ "./src/app/home/tabler-io.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/tabler-io.css":
/*!************************************!*\
  !*** ./src/app/home/tabler-io.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n}\n\na,\narticle,\naside,\naudio,\nb,\nbody,\ncanvas,\ndd,\ndetails,\ndiv,\ndl,\ndt,\nem,\nfieldset,\nfigcaption,\nfigure,\nfooter,\nform,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nheader,\nhtml,\ni,\nimg,\nlabel,\nli,\nmark,\nmenu,\nnav,\nol,\np,\nsection,\nspan,\nstrong,\nsub,\nsummary,\nsup,\ntable,\ntbody,\ntd,\ntfoot,\nth,\nthead,\ntime,\ntr,\nu,\nul,\nvideo {\n    border: 0;\n    outline: 0;\n    vertical-align: baseline;\n    background: 0 0;\n    font-size: 100%;\n    margin: 0;\n    padding: 0;\n}\n\na {\n    background: 0 0;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\ntd,\ntd img {\n    vertical-align: top;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 12px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=phone],\ninput[type=number],\ntextarea {\n    font: 12px Arial, Helvetica, sans-serif;\n    padding: 0;\n}\n\nsub,\nsup {\n    font-size: smaller;\n}\n\ninput[type=checkbox] {\n    vertical-align: bottom;\n}\n\ninput[type=radio] {\n    vertical-align: text-bottom;\n}\n\nsub {\n    vertical-align: sub;\n}\n\nsup {\n    vertical-align: super;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nhtml {\n    overflow-y: scroll;\n    overflow-x: auto;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\nbody {\n    line-height: 1;\n    color: #000;\n    text-align: left;\n    z-index: 1;\n}\n\ninput [type=text] {\n    padding: 0;\n}\n\ntextarea {\n    resize: none;\n    overflow: auto;\n}\n\nbutton,\ninput[type=submit],\ninput[type=reset],\ninput[type=tel],\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=phone],\ninput[type=number],\ninput[type=button],\ntextarea {\n    -webkit-appearance: none;\n}\n\na,\na:active,\na:focus,\na:hover,\na:visited {\n    text-decoration: none;\n}\n\nbutton::-moz-focus-inner,\ninput[type=submit]::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\ninput:invalid {\n    outline: 0;\n    border: none;\n}\n\n::-ms-clear {\n    display: none;\n}\n\n:focus,\ninput,\ninput[type=search]:focus,\ntextarea {\n    outline: 0;\n}\n\n::-webkit-input-placeholder {\n    color: #aeaeae;\n    -webkit-transition: color .3s ease-in-out;\n}\n\n:-ms-input-placeholder {\n    color: #aeaeae;\n    transition: color .3s ease-in-out;\n}\n\n::-ms-input-placeholder {\n    color: #aeaeae;\n    transition: color .3s ease-in-out;\n}\n\n::placeholder {\n    color: #aeaeae;\n    transition: color .3s ease-in-out;\n}\n\n:focus::-webkit-input-placeholder {\n    color: transparent;\n}\n\n:focus::-moz-placeholder {\n    color: transparent;\n}\n\n:focus:-moz-placeholder {\n    color: transparent;\n}\n\n:focus:-ms-input-placeholder {\n    color: transparent;\n}\n\nbody {\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1rem;\n    font-weight: 300;\n    line-height: 1.5;\n    background-color: white;\n    color: #4A4A4A;\n    -webkit-font-smoothing: antialiased;\n}\n\n.btn {\n    display: inline-block;\n    border-radius: 80px;\n    padding: 0 2rem;\n    font-weight: 700;\n    font-size: 1rem;\n    line-height: 3;\n    text-decoration: none;\n    color: #fff;\n    background: #1C7ED6;\n    border: 1px solid transparent;\n    transition: .3s background, .3s border-color, .3s color;\n}\n\n.btn:hover {\n    background: #1971bf;\n    text-decoration: none;\n}\n\n.btn-green {\n    background-color: #5eba00;\n}\n\n.btn-green:hover {\n    background-color: #51a100;\n}\n\n.btn-outline {\n    background: transparent;\n    color: #fff;\n    border-color: #fff;\n}\n\n.btn-outline:hover {\n    background: rgba(255, 255, 255, 0.08);\n    border-color: #fff;\n}\n\n.btn-outline-dark {\n    background: transparent;\n    color: #656f83;\n    border-color: #656f83;\n}\n\n.btn-outline-dark:hover {\n    color: #4A4A4A;\n    border-color: #4A4A4A;\n    background: transparent;\n}\n\n.btn-small {\n    line-height: 2rem;\n    padding: 0 1rem;\n    font-size: 0.875rem;\n    font-weight: 500;\n}\n\n.header {\n    padding: 1.5rem 0;\n    color: #fff;\n    background: linear-gradient(to right, #1488cc, #2b32b2);\n}\n\n.welcome .header {\n    background: transparent;\n}\n\n.footer {\n    border-top: 1px solid #eee;\n    padding: 2rem 0;\n    font-size: 0.875rem;\n    color: #8d96a7;\n}\n\n.footer a {\n    color: #656f83;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    font-weight: 700;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: inherit;\n    transition: .3s opacity;\n}\n\n.logo:hover {\n    opacity: .8;\n    text-decoration: none;\n}\n\n.logo-image {\n    width: 2rem;\n    height: 2rem;\n    margin-right: .75rem;\n}\n\n.logo-demo {\n    color: #fff;\n    font-weight: 500;\n    font-size: 20px;\n}\n\n.logo-demo .logo-image {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: .5rem;\n}\n\n.menu {\n    display: flex;\n    font-weight: 500;\n    font-size: 0.875rem;\n}\n\n.menu a {\n    color: inherit;\n    margin-left: 1.5rem;\n    display: flex;\n    align-items: center;\n}\n\n.menu a:hover {\n    text-decoration: none;\n    opacity: .8;\n}\n\n.menu svg {\n    width: 18px;\n    height: 18px;\n}\n\n.welcome {\n    text-align: center;\n    position: relative;\n    color: #fff;\n    padding-bottom: 1px;\n    margin-bottom: 8rem;\n    background: linear-gradient(to right, #1488cc, #2b32b2);\n}\n\n.welcome:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    /* background: url(../images/waves.svg) no-repeat bottom; */\n    z-index: 0;\n    pointer-events: none;\n}\n\n.welcome-title {\n    font-size: 3rem;\n    line-height: 1.1;\n    font-weight: 700;\n    margin: 0 0 1rem;\n}\n\n.welcome-description {\n    font-size: 1.5rem;\n    font-weight: 300;\n    margin: 0;\n}\n\n.welcome-browser {\n    margin-bottom: -8rem;\n}\n\n.welcome-browser svg {\n    max-width: 100%;\n    height: 1%;\n}\n\n.welcome-header {\n    padding: 4rem 0 6rem;\n}\n\n.container {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    max-width: 64rem;\n    padding: 0 1.5rem;\n    margin: 0 auto;\n}\n\n.container {\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n@media (min-width: 576px) {\n    .container {\n        max-width: 34rem;\n    }\n}\n\n@media (min-width: 768px) {\n    .container {\n        max-width: 45rem;\n    }\n}\n\n@media (min-width: 992px) {\n    .container {\n        max-width: 56rem;\n    }\n}\n\n@media (min-width: 1200px) {\n    .container {\n        max-width: 64rem;\n    }\n}\n\n.container-fluid {\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -0.5rem;\n    margin-left: -0.5rem;\n}\n\n.no-gutters {\n    margin-right: 0;\n    margin-left: 0;\n}\n\n.no-gutters>.col,\n.no-gutters>[class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0;\n}\n\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12,\n.col,\n.col-auto,\n.col-sm-1,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-sm,\n.col-sm-auto,\n.col-md-1,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-md,\n.col-md-auto,\n.col-lg-1,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-lg,\n.col-lg-auto,\n.col-xl-1,\n.col-xl-2,\n.col-xl-3,\n.col-xl-4,\n.col-xl-5,\n.col-xl-6,\n.col-xl-7,\n.col-xl-8,\n.col-xl-9,\n.col-xl-10,\n.col-xl-11,\n.col-xl-12,\n.col-xl,\n.col-xl-auto {\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n\n.col {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n}\n\n.col-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n}\n\n.col-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%;\n}\n\n.col-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%;\n}\n\n.col-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n\n.col-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%;\n}\n\n.col-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%;\n}\n\n.col-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n\n.col-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%;\n}\n\n.col-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%;\n}\n\n.col-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n\n.col-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%;\n}\n\n.col-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%;\n}\n\n.col-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n\n.order-first {\n    order: -1;\n}\n\n.order-0 {\n    order: 0;\n}\n\n.order-1 {\n    order: 1;\n}\n\n.order-2 {\n    order: 2;\n}\n\n.order-3 {\n    order: 3;\n}\n\n.order-4 {\n    order: 4;\n}\n\n.order-5 {\n    order: 5;\n}\n\n.order-6 {\n    order: 6;\n}\n\n.order-7 {\n    order: 7;\n}\n\n.order-8 {\n    order: 8;\n}\n\n.order-9 {\n    order: 9;\n}\n\n.order-10 {\n    order: 10;\n}\n\n.order-11 {\n    order: 11;\n}\n\n.order-12 {\n    order: 12;\n}\n\n.offset-1 {\n    margin-left: 8.33333333%;\n}\n\n.offset-2 {\n    margin-left: 16.66666667%;\n}\n\n.offset-3 {\n    margin-left: 25%;\n}\n\n.offset-4 {\n    margin-left: 33.33333333%;\n}\n\n.offset-5 {\n    margin-left: 41.66666667%;\n}\n\n.offset-6 {\n    margin-left: 50%;\n}\n\n.offset-7 {\n    margin-left: 58.33333333%;\n}\n\n.offset-8 {\n    margin-left: 66.66666667%;\n}\n\n.offset-9 {\n    margin-left: 75%;\n}\n\n.offset-10 {\n    margin-left: 83.33333333%;\n}\n\n.offset-11 {\n    margin-left: 91.66666667%;\n}\n\n@media (min-width: 576px) {\n    .col-sm {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-sm-auto {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: none;\n    }\n    .col-sm-1 {\n        flex: 0 0 8.33333333%;\n        max-width: 8.33333333%;\n    }\n    .col-sm-2 {\n        flex: 0 0 16.66666667%;\n        max-width: 16.66666667%;\n    }\n    .col-sm-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-sm-4 {\n        flex: 0 0 33.33333333%;\n        max-width: 33.33333333%;\n    }\n    .col-sm-5 {\n        flex: 0 0 41.66666667%;\n        max-width: 41.66666667%;\n    }\n    .col-sm-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-sm-7 {\n        flex: 0 0 58.33333333%;\n        max-width: 58.33333333%;\n    }\n    .col-sm-8 {\n        flex: 0 0 66.66666667%;\n        max-width: 66.66666667%;\n    }\n    .col-sm-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-sm-10 {\n        flex: 0 0 83.33333333%;\n        max-width: 83.33333333%;\n    }\n    .col-sm-11 {\n        flex: 0 0 91.66666667%;\n        max-width: 91.66666667%;\n    }\n    .col-sm-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .order-sm-first {\n        order: -1;\n    }\n    .order-sm-0 {\n        order: 0;\n    }\n    .order-sm-1 {\n        order: 1;\n    }\n    .order-sm-2 {\n        order: 2;\n    }\n    .order-sm-3 {\n        order: 3;\n    }\n    .order-sm-4 {\n        order: 4;\n    }\n    .order-sm-5 {\n        order: 5;\n    }\n    .order-sm-6 {\n        order: 6;\n    }\n    .order-sm-7 {\n        order: 7;\n    }\n    .order-sm-8 {\n        order: 8;\n    }\n    .order-sm-9 {\n        order: 9;\n    }\n    .order-sm-10 {\n        order: 10;\n    }\n    .order-sm-11 {\n        order: 11;\n    }\n    .order-sm-12 {\n        order: 12;\n    }\n    .offset-sm-0 {\n        margin-left: 0;\n    }\n    .offset-sm-1 {\n        margin-left: 8.33333333%;\n    }\n    .offset-sm-2 {\n        margin-left: 16.66666667%;\n    }\n    .offset-sm-3 {\n        margin-left: 25%;\n    }\n    .offset-sm-4 {\n        margin-left: 33.33333333%;\n    }\n    .offset-sm-5 {\n        margin-left: 41.66666667%;\n    }\n    .offset-sm-6 {\n        margin-left: 50%;\n    }\n    .offset-sm-7 {\n        margin-left: 58.33333333%;\n    }\n    .offset-sm-8 {\n        margin-left: 66.66666667%;\n    }\n    .offset-sm-9 {\n        margin-left: 75%;\n    }\n    .offset-sm-10 {\n        margin-left: 83.33333333%;\n    }\n    .offset-sm-11 {\n        margin-left: 91.66666667%;\n    }\n}\n\n@media (min-width: 768px) {\n    .col-md {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-md-auto {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: none;\n    }\n    .col-md-1 {\n        flex: 0 0 8.33333333%;\n        max-width: 8.33333333%;\n    }\n    .col-md-2 {\n        flex: 0 0 16.66666667%;\n        max-width: 16.66666667%;\n    }\n    .col-md-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-md-4 {\n        flex: 0 0 33.33333333%;\n        max-width: 33.33333333%;\n    }\n    .col-md-5 {\n        flex: 0 0 41.66666667%;\n        max-width: 41.66666667%;\n    }\n    .col-md-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-md-7 {\n        flex: 0 0 58.33333333%;\n        max-width: 58.33333333%;\n    }\n    .col-md-8 {\n        flex: 0 0 66.66666667%;\n        max-width: 66.66666667%;\n    }\n    .col-md-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-md-10 {\n        flex: 0 0 83.33333333%;\n        max-width: 83.33333333%;\n    }\n    .col-md-11 {\n        flex: 0 0 91.66666667%;\n        max-width: 91.66666667%;\n    }\n    .col-md-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .order-md-first {\n        order: -1;\n    }\n    .order-md-0 {\n        order: 0;\n    }\n    .order-md-1 {\n        order: 1;\n    }\n    .order-md-2 {\n        order: 2;\n    }\n    .order-md-3 {\n        order: 3;\n    }\n    .order-md-4 {\n        order: 4;\n    }\n    .order-md-5 {\n        order: 5;\n    }\n    .order-md-6 {\n        order: 6;\n    }\n    .order-md-7 {\n        order: 7;\n    }\n    .order-md-8 {\n        order: 8;\n    }\n    .order-md-9 {\n        order: 9;\n    }\n    .order-md-10 {\n        order: 10;\n    }\n    .order-md-11 {\n        order: 11;\n    }\n    .order-md-12 {\n        order: 12;\n    }\n    .offset-md-0 {\n        margin-left: 0;\n    }\n    .offset-md-1 {\n        margin-left: 8.33333333%;\n    }\n    .offset-md-2 {\n        margin-left: 16.66666667%;\n    }\n    .offset-md-3 {\n        margin-left: 25%;\n    }\n    .offset-md-4 {\n        margin-left: 33.33333333%;\n    }\n    .offset-md-5 {\n        margin-left: 41.66666667%;\n    }\n    .offset-md-6 {\n        margin-left: 50%;\n    }\n    .offset-md-7 {\n        margin-left: 58.33333333%;\n    }\n    .offset-md-8 {\n        margin-left: 66.66666667%;\n    }\n    .offset-md-9 {\n        margin-left: 75%;\n    }\n    .offset-md-10 {\n        margin-left: 83.33333333%;\n    }\n    .offset-md-11 {\n        margin-left: 91.66666667%;\n    }\n}\n\n@media (min-width: 992px) {\n    .col-lg {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-lg-auto {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: none;\n    }\n    .col-lg-1 {\n        flex: 0 0 8.33333333%;\n        max-width: 8.33333333%;\n    }\n    .col-lg-2 {\n        flex: 0 0 16.66666667%;\n        max-width: 16.66666667%;\n    }\n    .col-lg-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-lg-4 {\n        flex: 0 0 33.33333333%;\n        max-width: 33.33333333%;\n    }\n    .col-lg-5 {\n        flex: 0 0 41.66666667%;\n        max-width: 41.66666667%;\n    }\n    .col-lg-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-lg-7 {\n        flex: 0 0 58.33333333%;\n        max-width: 58.33333333%;\n    }\n    .col-lg-8 {\n        flex: 0 0 66.66666667%;\n        max-width: 66.66666667%;\n    }\n    .col-lg-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-lg-10 {\n        flex: 0 0 83.33333333%;\n        max-width: 83.33333333%;\n    }\n    .col-lg-11 {\n        flex: 0 0 91.66666667%;\n        max-width: 91.66666667%;\n    }\n    .col-lg-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .order-lg-first {\n        order: -1;\n    }\n    .order-lg-0 {\n        order: 0;\n    }\n    .order-lg-1 {\n        order: 1;\n    }\n    .order-lg-2 {\n        order: 2;\n    }\n    .order-lg-3 {\n        order: 3;\n    }\n    .order-lg-4 {\n        order: 4;\n    }\n    .order-lg-5 {\n        order: 5;\n    }\n    .order-lg-6 {\n        order: 6;\n    }\n    .order-lg-7 {\n        order: 7;\n    }\n    .order-lg-8 {\n        order: 8;\n    }\n    .order-lg-9 {\n        order: 9;\n    }\n    .order-lg-10 {\n        order: 10;\n    }\n    .order-lg-11 {\n        order: 11;\n    }\n    .order-lg-12 {\n        order: 12;\n    }\n    .offset-lg-0 {\n        margin-left: 0;\n    }\n    .offset-lg-1 {\n        margin-left: 8.33333333%;\n    }\n    .offset-lg-2 {\n        margin-left: 16.66666667%;\n    }\n    .offset-lg-3 {\n        margin-left: 25%;\n    }\n    .offset-lg-4 {\n        margin-left: 33.33333333%;\n    }\n    .offset-lg-5 {\n        margin-left: 41.66666667%;\n    }\n    .offset-lg-6 {\n        margin-left: 50%;\n    }\n    .offset-lg-7 {\n        margin-left: 58.33333333%;\n    }\n    .offset-lg-8 {\n        margin-left: 66.66666667%;\n    }\n    .offset-lg-9 {\n        margin-left: 75%;\n    }\n    .offset-lg-10 {\n        margin-left: 83.33333333%;\n    }\n    .offset-lg-11 {\n        margin-left: 91.66666667%;\n    }\n}\n\n@media (min-width: 1200px) {\n    .col-xl {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n    }\n    .col-xl-auto {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: none;\n    }\n    .col-xl-1 {\n        flex: 0 0 8.33333333%;\n        max-width: 8.33333333%;\n    }\n    .col-xl-2 {\n        flex: 0 0 16.66666667%;\n        max-width: 16.66666667%;\n    }\n    .col-xl-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n    .col-xl-4 {\n        flex: 0 0 33.33333333%;\n        max-width: 33.33333333%;\n    }\n    .col-xl-5 {\n        flex: 0 0 41.66666667%;\n        max-width: 41.66666667%;\n    }\n    .col-xl-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-xl-7 {\n        flex: 0 0 58.33333333%;\n        max-width: 58.33333333%;\n    }\n    .col-xl-8 {\n        flex: 0 0 66.66666667%;\n        max-width: 66.66666667%;\n    }\n    .col-xl-9 {\n        flex: 0 0 75%;\n        max-width: 75%;\n    }\n    .col-xl-10 {\n        flex: 0 0 83.33333333%;\n        max-width: 83.33333333%;\n    }\n    .col-xl-11 {\n        flex: 0 0 91.66666667%;\n        max-width: 91.66666667%;\n    }\n    .col-xl-12 {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .order-xl-first {\n        order: -1;\n    }\n    .order-xl-0 {\n        order: 0;\n    }\n    .order-xl-1 {\n        order: 1;\n    }\n    .order-xl-2 {\n        order: 2;\n    }\n    .order-xl-3 {\n        order: 3;\n    }\n    .order-xl-4 {\n        order: 4;\n    }\n    .order-xl-5 {\n        order: 5;\n    }\n    .order-xl-6 {\n        order: 6;\n    }\n    .order-xl-7 {\n        order: 7;\n    }\n    .order-xl-8 {\n        order: 8;\n    }\n    .order-xl-9 {\n        order: 9;\n    }\n    .order-xl-10 {\n        order: 10;\n    }\n    .order-xl-11 {\n        order: 11;\n    }\n    .order-xl-12 {\n        order: 12;\n    }\n    .offset-xl-0 {\n        margin-left: 0;\n    }\n    .offset-xl-1 {\n        margin-left: 8.33333333%;\n    }\n    .offset-xl-2 {\n        margin-left: 16.66666667%;\n    }\n    .offset-xl-3 {\n        margin-left: 25%;\n    }\n    .offset-xl-4 {\n        margin-left: 33.33333333%;\n    }\n    .offset-xl-5 {\n        margin-left: 41.66666667%;\n    }\n    .offset-xl-6 {\n        margin-left: 50%;\n    }\n    .offset-xl-7 {\n        margin-left: 58.33333333%;\n    }\n    .offset-xl-8 {\n        margin-left: 66.66666667%;\n    }\n    .offset-xl-9 {\n        margin-left: 75%;\n    }\n    .offset-xl-10 {\n        margin-left: 83.33333333%;\n    }\n    .offset-xl-11 {\n        margin-left: 91.66666667%;\n    }\n}\n\n.m-0 {\n    margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n    margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n    margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n    margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n    margin-left: 0 !important;\n}\n\n.m-1 {\n    margin: 0.5rem !important;\n}\n\n.mt-1,\n.my-1 {\n    margin-top: 0.5rem !important;\n}\n\n.mr-1,\n.mx-1 {\n    margin-right: 0.5rem !important;\n}\n\n.mb-1,\n.my-1 {\n    margin-bottom: 0.5rem !important;\n}\n\n.ml-1,\n.mx-1 {\n    margin-left: 0.5rem !important;\n}\n\n.m-2 {\n    margin: 0.75rem !important;\n}\n\n.mt-2,\n.my-2 {\n    margin-top: 0.75rem !important;\n}\n\n.mr-2,\n.mx-2 {\n    margin-right: 0.75rem !important;\n}\n\n.mb-2,\n.my-2 {\n    margin-bottom: 0.75rem !important;\n}\n\n.ml-2,\n.mx-2 {\n    margin-left: 0.75rem !important;\n}\n\n.m-3 {\n    margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n    margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n    margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n    margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n    margin-left: 1rem !important;\n}\n\n.m-4 {\n    margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n    margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n    margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n    margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n    margin-left: 1.5rem !important;\n}\n\n.m-5 {\n    margin: 2rem !important;\n}\n\n.mt-5,\n.my-5 {\n    margin-top: 2rem !important;\n}\n\n.mr-5,\n.mx-5 {\n    margin-right: 2rem !important;\n}\n\n.mb-5,\n.my-5 {\n    margin-bottom: 2rem !important;\n}\n\n.ml-5,\n.mx-5 {\n    margin-left: 2rem !important;\n}\n\n.m-6 {\n    margin: 4rem !important;\n}\n\n.mt-6,\n.my-6 {\n    margin-top: 4rem !important;\n}\n\n.mr-6,\n.mx-6 {\n    margin-right: 4rem !important;\n}\n\n.mb-6,\n.my-6 {\n    margin-bottom: 4rem !important;\n}\n\n.ml-6,\n.mx-6 {\n    margin-left: 4rem !important;\n}\n\n.m-7 {\n    margin: 6rem !important;\n}\n\n.mt-7,\n.my-7 {\n    margin-top: 6rem !important;\n}\n\n.mr-7,\n.mx-7 {\n    margin-right: 6rem !important;\n}\n\n.mb-7,\n.my-7 {\n    margin-bottom: 6rem !important;\n}\n\n.ml-7,\n.mx-7 {\n    margin-left: 6rem !important;\n}\n\n.p-0 {\n    padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n    padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n    padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n    padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n    padding-left: 0 !important;\n}\n\n.p-1 {\n    padding: 0.5rem !important;\n}\n\n.pt-1,\n.py-1 {\n    padding-top: 0.5rem !important;\n}\n\n.pr-1,\n.px-1 {\n    padding-right: 0.5rem !important;\n}\n\n.pb-1,\n.py-1 {\n    padding-bottom: 0.5rem !important;\n}\n\n.pl-1,\n.px-1 {\n    padding-left: 0.5rem !important;\n}\n\n.p-2 {\n    padding: 0.75rem !important;\n}\n\n.pt-2,\n.py-2 {\n    padding-top: 0.75rem !important;\n}\n\n.pr-2,\n.px-2 {\n    padding-right: 0.75rem !important;\n}\n\n.pb-2,\n.py-2 {\n    padding-bottom: 0.75rem !important;\n}\n\n.pl-2,\n.px-2 {\n    padding-left: 0.75rem !important;\n}\n\n.p-3 {\n    padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n    padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n    padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n    padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n    padding-left: 1rem !important;\n}\n\n.p-4 {\n    padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n    padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n    padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n    padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n    padding-left: 1.5rem !important;\n}\n\n.p-5 {\n    padding: 2rem !important;\n}\n\n.pt-5,\n.py-5 {\n    padding-top: 2rem !important;\n}\n\n.pr-5,\n.px-5 {\n    padding-right: 2rem !important;\n}\n\n.pb-5,\n.py-5 {\n    padding-bottom: 2rem !important;\n}\n\n.pl-5,\n.px-5 {\n    padding-left: 2rem !important;\n}\n\n.p-6 {\n    padding: 4rem !important;\n}\n\n.pt-6,\n.py-6 {\n    padding-top: 4rem !important;\n}\n\n.pr-6,\n.px-6 {\n    padding-right: 4rem !important;\n}\n\n.pb-6,\n.py-6 {\n    padding-bottom: 4rem !important;\n}\n\n.pl-6,\n.px-6 {\n    padding-left: 4rem !important;\n}\n\n.p-7 {\n    padding: 6rem !important;\n}\n\n.pt-7,\n.py-7 {\n    padding-top: 6rem !important;\n}\n\n.pr-7,\n.px-7 {\n    padding-right: 6rem !important;\n}\n\n.pb-7,\n.py-7 {\n    padding-bottom: 6rem !important;\n}\n\n.pl-7,\n.px-7 {\n    padding-left: 6rem !important;\n}\n\n.m-auto {\n    margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n    margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n    margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n    margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n    margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n    .m-sm-0 {\n        margin: 0 !important;\n    }\n    .mt-sm-0,\n    .my-sm-0 {\n        margin-top: 0 !important;\n    }\n    .mr-sm-0,\n    .mx-sm-0 {\n        margin-right: 0 !important;\n    }\n    .mb-sm-0,\n    .my-sm-0 {\n        margin-bottom: 0 !important;\n    }\n    .ml-sm-0,\n    .mx-sm-0 {\n        margin-left: 0 !important;\n    }\n    .m-sm-1 {\n        margin: 0.5rem !important;\n    }\n    .mt-sm-1,\n    .my-sm-1 {\n        margin-top: 0.5rem !important;\n    }\n    .mr-sm-1,\n    .mx-sm-1 {\n        margin-right: 0.5rem !important;\n    }\n    .mb-sm-1,\n    .my-sm-1 {\n        margin-bottom: 0.5rem !important;\n    }\n    .ml-sm-1,\n    .mx-sm-1 {\n        margin-left: 0.5rem !important;\n    }\n    .m-sm-2 {\n        margin: 0.75rem !important;\n    }\n    .mt-sm-2,\n    .my-sm-2 {\n        margin-top: 0.75rem !important;\n    }\n    .mr-sm-2,\n    .mx-sm-2 {\n        margin-right: 0.75rem !important;\n    }\n    .mb-sm-2,\n    .my-sm-2 {\n        margin-bottom: 0.75rem !important;\n    }\n    .ml-sm-2,\n    .mx-sm-2 {\n        margin-left: 0.75rem !important;\n    }\n    .m-sm-3 {\n        margin: 1rem !important;\n    }\n    .mt-sm-3,\n    .my-sm-3 {\n        margin-top: 1rem !important;\n    }\n    .mr-sm-3,\n    .mx-sm-3 {\n        margin-right: 1rem !important;\n    }\n    .mb-sm-3,\n    .my-sm-3 {\n        margin-bottom: 1rem !important;\n    }\n    .ml-sm-3,\n    .mx-sm-3 {\n        margin-left: 1rem !important;\n    }\n    .m-sm-4 {\n        margin: 1.5rem !important;\n    }\n    .mt-sm-4,\n    .my-sm-4 {\n        margin-top: 1.5rem !important;\n    }\n    .mr-sm-4,\n    .mx-sm-4 {\n        margin-right: 1.5rem !important;\n    }\n    .mb-sm-4,\n    .my-sm-4 {\n        margin-bottom: 1.5rem !important;\n    }\n    .ml-sm-4,\n    .mx-sm-4 {\n        margin-left: 1.5rem !important;\n    }\n    .m-sm-5 {\n        margin: 2rem !important;\n    }\n    .mt-sm-5,\n    .my-sm-5 {\n        margin-top: 2rem !important;\n    }\n    .mr-sm-5,\n    .mx-sm-5 {\n        margin-right: 2rem !important;\n    }\n    .mb-sm-5,\n    .my-sm-5 {\n        margin-bottom: 2rem !important;\n    }\n    .ml-sm-5,\n    .mx-sm-5 {\n        margin-left: 2rem !important;\n    }\n    .m-sm-6 {\n        margin: 4rem !important;\n    }\n    .mt-sm-6,\n    .my-sm-6 {\n        margin-top: 4rem !important;\n    }\n    .mr-sm-6,\n    .mx-sm-6 {\n        margin-right: 4rem !important;\n    }\n    .mb-sm-6,\n    .my-sm-6 {\n        margin-bottom: 4rem !important;\n    }\n    .ml-sm-6,\n    .mx-sm-6 {\n        margin-left: 4rem !important;\n    }\n    .m-sm-7 {\n        margin: 6rem !important;\n    }\n    .mt-sm-7,\n    .my-sm-7 {\n        margin-top: 6rem !important;\n    }\n    .mr-sm-7,\n    .mx-sm-7 {\n        margin-right: 6rem !important;\n    }\n    .mb-sm-7,\n    .my-sm-7 {\n        margin-bottom: 6rem !important;\n    }\n    .ml-sm-7,\n    .mx-sm-7 {\n        margin-left: 6rem !important;\n    }\n    .p-sm-0 {\n        padding: 0 !important;\n    }\n    .pt-sm-0,\n    .py-sm-0 {\n        padding-top: 0 !important;\n    }\n    .pr-sm-0,\n    .px-sm-0 {\n        padding-right: 0 !important;\n    }\n    .pb-sm-0,\n    .py-sm-0 {\n        padding-bottom: 0 !important;\n    }\n    .pl-sm-0,\n    .px-sm-0 {\n        padding-left: 0 !important;\n    }\n    .p-sm-1 {\n        padding: 0.5rem !important;\n    }\n    .pt-sm-1,\n    .py-sm-1 {\n        padding-top: 0.5rem !important;\n    }\n    .pr-sm-1,\n    .px-sm-1 {\n        padding-right: 0.5rem !important;\n    }\n    .pb-sm-1,\n    .py-sm-1 {\n        padding-bottom: 0.5rem !important;\n    }\n    .pl-sm-1,\n    .px-sm-1 {\n        padding-left: 0.5rem !important;\n    }\n    .p-sm-2 {\n        padding: 0.75rem !important;\n    }\n    .pt-sm-2,\n    .py-sm-2 {\n        padding-top: 0.75rem !important;\n    }\n    .pr-sm-2,\n    .px-sm-2 {\n        padding-right: 0.75rem !important;\n    }\n    .pb-sm-2,\n    .py-sm-2 {\n        padding-bottom: 0.75rem !important;\n    }\n    .pl-sm-2,\n    .px-sm-2 {\n        padding-left: 0.75rem !important;\n    }\n    .p-sm-3 {\n        padding: 1rem !important;\n    }\n    .pt-sm-3,\n    .py-sm-3 {\n        padding-top: 1rem !important;\n    }\n    .pr-sm-3,\n    .px-sm-3 {\n        padding-right: 1rem !important;\n    }\n    .pb-sm-3,\n    .py-sm-3 {\n        padding-bottom: 1rem !important;\n    }\n    .pl-sm-3,\n    .px-sm-3 {\n        padding-left: 1rem !important;\n    }\n    .p-sm-4 {\n        padding: 1.5rem !important;\n    }\n    .pt-sm-4,\n    .py-sm-4 {\n        padding-top: 1.5rem !important;\n    }\n    .pr-sm-4,\n    .px-sm-4 {\n        padding-right: 1.5rem !important;\n    }\n    .pb-sm-4,\n    .py-sm-4 {\n        padding-bottom: 1.5rem !important;\n    }\n    .pl-sm-4,\n    .px-sm-4 {\n        padding-left: 1.5rem !important;\n    }\n    .p-sm-5 {\n        padding: 2rem !important;\n    }\n    .pt-sm-5,\n    .py-sm-5 {\n        padding-top: 2rem !important;\n    }\n    .pr-sm-5,\n    .px-sm-5 {\n        padding-right: 2rem !important;\n    }\n    .pb-sm-5,\n    .py-sm-5 {\n        padding-bottom: 2rem !important;\n    }\n    .pl-sm-5,\n    .px-sm-5 {\n        padding-left: 2rem !important;\n    }\n    .p-sm-6 {\n        padding: 4rem !important;\n    }\n    .pt-sm-6,\n    .py-sm-6 {\n        padding-top: 4rem !important;\n    }\n    .pr-sm-6,\n    .px-sm-6 {\n        padding-right: 4rem !important;\n    }\n    .pb-sm-6,\n    .py-sm-6 {\n        padding-bottom: 4rem !important;\n    }\n    .pl-sm-6,\n    .px-sm-6 {\n        padding-left: 4rem !important;\n    }\n    .p-sm-7 {\n        padding: 6rem !important;\n    }\n    .pt-sm-7,\n    .py-sm-7 {\n        padding-top: 6rem !important;\n    }\n    .pr-sm-7,\n    .px-sm-7 {\n        padding-right: 6rem !important;\n    }\n    .pb-sm-7,\n    .py-sm-7 {\n        padding-bottom: 6rem !important;\n    }\n    .pl-sm-7,\n    .px-sm-7 {\n        padding-left: 6rem !important;\n    }\n    .m-sm-auto {\n        margin: auto !important;\n    }\n    .mt-sm-auto,\n    .my-sm-auto {\n        margin-top: auto !important;\n    }\n    .mr-sm-auto,\n    .mx-sm-auto {\n        margin-right: auto !important;\n    }\n    .mb-sm-auto,\n    .my-sm-auto {\n        margin-bottom: auto !important;\n    }\n    .ml-sm-auto,\n    .mx-sm-auto {\n        margin-left: auto !important;\n    }\n}\n\n@media (min-width: 768px) {\n    .m-md-0 {\n        margin: 0 !important;\n    }\n    .mt-md-0,\n    .my-md-0 {\n        margin-top: 0 !important;\n    }\n    .mr-md-0,\n    .mx-md-0 {\n        margin-right: 0 !important;\n    }\n    .mb-md-0,\n    .my-md-0 {\n        margin-bottom: 0 !important;\n    }\n    .ml-md-0,\n    .mx-md-0 {\n        margin-left: 0 !important;\n    }\n    .m-md-1 {\n        margin: 0.5rem !important;\n    }\n    .mt-md-1,\n    .my-md-1 {\n        margin-top: 0.5rem !important;\n    }\n    .mr-md-1,\n    .mx-md-1 {\n        margin-right: 0.5rem !important;\n    }\n    .mb-md-1,\n    .my-md-1 {\n        margin-bottom: 0.5rem !important;\n    }\n    .ml-md-1,\n    .mx-md-1 {\n        margin-left: 0.5rem !important;\n    }\n    .m-md-2 {\n        margin: 0.75rem !important;\n    }\n    .mt-md-2,\n    .my-md-2 {\n        margin-top: 0.75rem !important;\n    }\n    .mr-md-2,\n    .mx-md-2 {\n        margin-right: 0.75rem !important;\n    }\n    .mb-md-2,\n    .my-md-2 {\n        margin-bottom: 0.75rem !important;\n    }\n    .ml-md-2,\n    .mx-md-2 {\n        margin-left: 0.75rem !important;\n    }\n    .m-md-3 {\n        margin: 1rem !important;\n    }\n    .mt-md-3,\n    .my-md-3 {\n        margin-top: 1rem !important;\n    }\n    .mr-md-3,\n    .mx-md-3 {\n        margin-right: 1rem !important;\n    }\n    .mb-md-3,\n    .my-md-3 {\n        margin-bottom: 1rem !important;\n    }\n    .ml-md-3,\n    .mx-md-3 {\n        margin-left: 1rem !important;\n    }\n    .m-md-4 {\n        margin: 1.5rem !important;\n    }\n    .mt-md-4,\n    .my-md-4 {\n        margin-top: 1.5rem !important;\n    }\n    .mr-md-4,\n    .mx-md-4 {\n        margin-right: 1.5rem !important;\n    }\n    .mb-md-4,\n    .my-md-4 {\n        margin-bottom: 1.5rem !important;\n    }\n    .ml-md-4,\n    .mx-md-4 {\n        margin-left: 1.5rem !important;\n    }\n    .m-md-5 {\n        margin: 2rem !important;\n    }\n    .mt-md-5,\n    .my-md-5 {\n        margin-top: 2rem !important;\n    }\n    .mr-md-5,\n    .mx-md-5 {\n        margin-right: 2rem !important;\n    }\n    .mb-md-5,\n    .my-md-5 {\n        margin-bottom: 2rem !important;\n    }\n    .ml-md-5,\n    .mx-md-5 {\n        margin-left: 2rem !important;\n    }\n    .m-md-6 {\n        margin: 4rem !important;\n    }\n    .mt-md-6,\n    .my-md-6 {\n        margin-top: 4rem !important;\n    }\n    .mr-md-6,\n    .mx-md-6 {\n        margin-right: 4rem !important;\n    }\n    .mb-md-6,\n    .my-md-6 {\n        margin-bottom: 4rem !important;\n    }\n    .ml-md-6,\n    .mx-md-6 {\n        margin-left: 4rem !important;\n    }\n    .m-md-7 {\n        margin: 6rem !important;\n    }\n    .mt-md-7,\n    .my-md-7 {\n        margin-top: 6rem !important;\n    }\n    .mr-md-7,\n    .mx-md-7 {\n        margin-right: 6rem !important;\n    }\n    .mb-md-7,\n    .my-md-7 {\n        margin-bottom: 6rem !important;\n    }\n    .ml-md-7,\n    .mx-md-7 {\n        margin-left: 6rem !important;\n    }\n    .p-md-0 {\n        padding: 0 !important;\n    }\n    .pt-md-0,\n    .py-md-0 {\n        padding-top: 0 !important;\n    }\n    .pr-md-0,\n    .px-md-0 {\n        padding-right: 0 !important;\n    }\n    .pb-md-0,\n    .py-md-0 {\n        padding-bottom: 0 !important;\n    }\n    .pl-md-0,\n    .px-md-0 {\n        padding-left: 0 !important;\n    }\n    .p-md-1 {\n        padding: 0.5rem !important;\n    }\n    .pt-md-1,\n    .py-md-1 {\n        padding-top: 0.5rem !important;\n    }\n    .pr-md-1,\n    .px-md-1 {\n        padding-right: 0.5rem !important;\n    }\n    .pb-md-1,\n    .py-md-1 {\n        padding-bottom: 0.5rem !important;\n    }\n    .pl-md-1,\n    .px-md-1 {\n        padding-left: 0.5rem !important;\n    }\n    .p-md-2 {\n        padding: 0.75rem !important;\n    }\n    .pt-md-2,\n    .py-md-2 {\n        padding-top: 0.75rem !important;\n    }\n    .pr-md-2,\n    .px-md-2 {\n        padding-right: 0.75rem !important;\n    }\n    .pb-md-2,\n    .py-md-2 {\n        padding-bottom: 0.75rem !important;\n    }\n    .pl-md-2,\n    .px-md-2 {\n        padding-left: 0.75rem !important;\n    }\n    .p-md-3 {\n        padding: 1rem !important;\n    }\n    .pt-md-3,\n    .py-md-3 {\n        padding-top: 1rem !important;\n    }\n    .pr-md-3,\n    .px-md-3 {\n        padding-right: 1rem !important;\n    }\n    .pb-md-3,\n    .py-md-3 {\n        padding-bottom: 1rem !important;\n    }\n    .pl-md-3,\n    .px-md-3 {\n        padding-left: 1rem !important;\n    }\n    .p-md-4 {\n        padding: 1.5rem !important;\n    }\n    .pt-md-4,\n    .py-md-4 {\n        padding-top: 1.5rem !important;\n    }\n    .pr-md-4,\n    .px-md-4 {\n        padding-right: 1.5rem !important;\n    }\n    .pb-md-4,\n    .py-md-4 {\n        padding-bottom: 1.5rem !important;\n    }\n    .pl-md-4,\n    .px-md-4 {\n        padding-left: 1.5rem !important;\n    }\n    .p-md-5 {\n        padding: 2rem !important;\n    }\n    .pt-md-5,\n    .py-md-5 {\n        padding-top: 2rem !important;\n    }\n    .pr-md-5,\n    .px-md-5 {\n        padding-right: 2rem !important;\n    }\n    .pb-md-5,\n    .py-md-5 {\n        padding-bottom: 2rem !important;\n    }\n    .pl-md-5,\n    .px-md-5 {\n        padding-left: 2rem !important;\n    }\n    .p-md-6 {\n        padding: 4rem !important;\n    }\n    .pt-md-6,\n    .py-md-6 {\n        padding-top: 4rem !important;\n    }\n    .pr-md-6,\n    .px-md-6 {\n        padding-right: 4rem !important;\n    }\n    .pb-md-6,\n    .py-md-6 {\n        padding-bottom: 4rem !important;\n    }\n    .pl-md-6,\n    .px-md-6 {\n        padding-left: 4rem !important;\n    }\n    .p-md-7 {\n        padding: 6rem !important;\n    }\n    .pt-md-7,\n    .py-md-7 {\n        padding-top: 6rem !important;\n    }\n    .pr-md-7,\n    .px-md-7 {\n        padding-right: 6rem !important;\n    }\n    .pb-md-7,\n    .py-md-7 {\n        padding-bottom: 6rem !important;\n    }\n    .pl-md-7,\n    .px-md-7 {\n        padding-left: 6rem !important;\n    }\n    .m-md-auto {\n        margin: auto !important;\n    }\n    .mt-md-auto,\n    .my-md-auto {\n        margin-top: auto !important;\n    }\n    .mr-md-auto,\n    .mx-md-auto {\n        margin-right: auto !important;\n    }\n    .mb-md-auto,\n    .my-md-auto {\n        margin-bottom: auto !important;\n    }\n    .ml-md-auto,\n    .mx-md-auto {\n        margin-left: auto !important;\n    }\n}\n\n@media (min-width: 992px) {\n    .m-lg-0 {\n        margin: 0 !important;\n    }\n    .mt-lg-0,\n    .my-lg-0 {\n        margin-top: 0 !important;\n    }\n    .mr-lg-0,\n    .mx-lg-0 {\n        margin-right: 0 !important;\n    }\n    .mb-lg-0,\n    .my-lg-0 {\n        margin-bottom: 0 !important;\n    }\n    .ml-lg-0,\n    .mx-lg-0 {\n        margin-left: 0 !important;\n    }\n    .m-lg-1 {\n        margin: 0.5rem !important;\n    }\n    .mt-lg-1,\n    .my-lg-1 {\n        margin-top: 0.5rem !important;\n    }\n    .mr-lg-1,\n    .mx-lg-1 {\n        margin-right: 0.5rem !important;\n    }\n    .mb-lg-1,\n    .my-lg-1 {\n        margin-bottom: 0.5rem !important;\n    }\n    .ml-lg-1,\n    .mx-lg-1 {\n        margin-left: 0.5rem !important;\n    }\n    .m-lg-2 {\n        margin: 0.75rem !important;\n    }\n    .mt-lg-2,\n    .my-lg-2 {\n        margin-top: 0.75rem !important;\n    }\n    .mr-lg-2,\n    .mx-lg-2 {\n        margin-right: 0.75rem !important;\n    }\n    .mb-lg-2,\n    .my-lg-2 {\n        margin-bottom: 0.75rem !important;\n    }\n    .ml-lg-2,\n    .mx-lg-2 {\n        margin-left: 0.75rem !important;\n    }\n    .m-lg-3 {\n        margin: 1rem !important;\n    }\n    .mt-lg-3,\n    .my-lg-3 {\n        margin-top: 1rem !important;\n    }\n    .mr-lg-3,\n    .mx-lg-3 {\n        margin-right: 1rem !important;\n    }\n    .mb-lg-3,\n    .my-lg-3 {\n        margin-bottom: 1rem !important;\n    }\n    .ml-lg-3,\n    .mx-lg-3 {\n        margin-left: 1rem !important;\n    }\n    .m-lg-4 {\n        margin: 1.5rem !important;\n    }\n    .mt-lg-4,\n    .my-lg-4 {\n        margin-top: 1.5rem !important;\n    }\n    .mr-lg-4,\n    .mx-lg-4 {\n        margin-right: 1.5rem !important;\n    }\n    .mb-lg-4,\n    .my-lg-4 {\n        margin-bottom: 1.5rem !important;\n    }\n    .ml-lg-4,\n    .mx-lg-4 {\n        margin-left: 1.5rem !important;\n    }\n    .m-lg-5 {\n        margin: 2rem !important;\n    }\n    .mt-lg-5,\n    .my-lg-5 {\n        margin-top: 2rem !important;\n    }\n    .mr-lg-5,\n    .mx-lg-5 {\n        margin-right: 2rem !important;\n    }\n    .mb-lg-5,\n    .my-lg-5 {\n        margin-bottom: 2rem !important;\n    }\n    .ml-lg-5,\n    .mx-lg-5 {\n        margin-left: 2rem !important;\n    }\n    .m-lg-6 {\n        margin: 4rem !important;\n    }\n    .mt-lg-6,\n    .my-lg-6 {\n        margin-top: 4rem !important;\n    }\n    .mr-lg-6,\n    .mx-lg-6 {\n        margin-right: 4rem !important;\n    }\n    .mb-lg-6,\n    .my-lg-6 {\n        margin-bottom: 4rem !important;\n    }\n    .ml-lg-6,\n    .mx-lg-6 {\n        margin-left: 4rem !important;\n    }\n    .m-lg-7 {\n        margin: 6rem !important;\n    }\n    .mt-lg-7,\n    .my-lg-7 {\n        margin-top: 6rem !important;\n    }\n    .mr-lg-7,\n    .mx-lg-7 {\n        margin-right: 6rem !important;\n    }\n    .mb-lg-7,\n    .my-lg-7 {\n        margin-bottom: 6rem !important;\n    }\n    .ml-lg-7,\n    .mx-lg-7 {\n        margin-left: 6rem !important;\n    }\n    .p-lg-0 {\n        padding: 0 !important;\n    }\n    .pt-lg-0,\n    .py-lg-0 {\n        padding-top: 0 !important;\n    }\n    .pr-lg-0,\n    .px-lg-0 {\n        padding-right: 0 !important;\n    }\n    .pb-lg-0,\n    .py-lg-0 {\n        padding-bottom: 0 !important;\n    }\n    .pl-lg-0,\n    .px-lg-0 {\n        padding-left: 0 !important;\n    }\n    .p-lg-1 {\n        padding: 0.5rem !important;\n    }\n    .pt-lg-1,\n    .py-lg-1 {\n        padding-top: 0.5rem !important;\n    }\n    .pr-lg-1,\n    .px-lg-1 {\n        padding-right: 0.5rem !important;\n    }\n    .pb-lg-1,\n    .py-lg-1 {\n        padding-bottom: 0.5rem !important;\n    }\n    .pl-lg-1,\n    .px-lg-1 {\n        padding-left: 0.5rem !important;\n    }\n    .p-lg-2 {\n        padding: 0.75rem !important;\n    }\n    .pt-lg-2,\n    .py-lg-2 {\n        padding-top: 0.75rem !important;\n    }\n    .pr-lg-2,\n    .px-lg-2 {\n        padding-right: 0.75rem !important;\n    }\n    .pb-lg-2,\n    .py-lg-2 {\n        padding-bottom: 0.75rem !important;\n    }\n    .pl-lg-2,\n    .px-lg-2 {\n        padding-left: 0.75rem !important;\n    }\n    .p-lg-3 {\n        padding: 1rem !important;\n    }\n    .pt-lg-3,\n    .py-lg-3 {\n        padding-top: 1rem !important;\n    }\n    .pr-lg-3,\n    .px-lg-3 {\n        padding-right: 1rem !important;\n    }\n    .pb-lg-3,\n    .py-lg-3 {\n        padding-bottom: 1rem !important;\n    }\n    .pl-lg-3,\n    .px-lg-3 {\n        padding-left: 1rem !important;\n    }\n    .p-lg-4 {\n        padding: 1.5rem !important;\n    }\n    .pt-lg-4,\n    .py-lg-4 {\n        padding-top: 1.5rem !important;\n    }\n    .pr-lg-4,\n    .px-lg-4 {\n        padding-right: 1.5rem !important;\n    }\n    .pb-lg-4,\n    .py-lg-4 {\n        padding-bottom: 1.5rem !important;\n    }\n    .pl-lg-4,\n    .px-lg-4 {\n        padding-left: 1.5rem !important;\n    }\n    .p-lg-5 {\n        padding: 2rem !important;\n    }\n    .pt-lg-5,\n    .py-lg-5 {\n        padding-top: 2rem !important;\n    }\n    .pr-lg-5,\n    .px-lg-5 {\n        padding-right: 2rem !important;\n    }\n    .pb-lg-5,\n    .py-lg-5 {\n        padding-bottom: 2rem !important;\n    }\n    .pl-lg-5,\n    .px-lg-5 {\n        padding-left: 2rem !important;\n    }\n    .p-lg-6 {\n        padding: 4rem !important;\n    }\n    .pt-lg-6,\n    .py-lg-6 {\n        padding-top: 4rem !important;\n    }\n    .pr-lg-6,\n    .px-lg-6 {\n        padding-right: 4rem !important;\n    }\n    .pb-lg-6,\n    .py-lg-6 {\n        padding-bottom: 4rem !important;\n    }\n    .pl-lg-6,\n    .px-lg-6 {\n        padding-left: 4rem !important;\n    }\n    .p-lg-7 {\n        padding: 6rem !important;\n    }\n    .pt-lg-7,\n    .py-lg-7 {\n        padding-top: 6rem !important;\n    }\n    .pr-lg-7,\n    .px-lg-7 {\n        padding-right: 6rem !important;\n    }\n    .pb-lg-7,\n    .py-lg-7 {\n        padding-bottom: 6rem !important;\n    }\n    .pl-lg-7,\n    .px-lg-7 {\n        padding-left: 6rem !important;\n    }\n    .m-lg-auto {\n        margin: auto !important;\n    }\n    .mt-lg-auto,\n    .my-lg-auto {\n        margin-top: auto !important;\n    }\n    .mr-lg-auto,\n    .mx-lg-auto {\n        margin-right: auto !important;\n    }\n    .mb-lg-auto,\n    .my-lg-auto {\n        margin-bottom: auto !important;\n    }\n    .ml-lg-auto,\n    .mx-lg-auto {\n        margin-left: auto !important;\n    }\n}\n\n@media (min-width: 1200px) {\n    .m-xl-0 {\n        margin: 0 !important;\n    }\n    .mt-xl-0,\n    .my-xl-0 {\n        margin-top: 0 !important;\n    }\n    .mr-xl-0,\n    .mx-xl-0 {\n        margin-right: 0 !important;\n    }\n    .mb-xl-0,\n    .my-xl-0 {\n        margin-bottom: 0 !important;\n    }\n    .ml-xl-0,\n    .mx-xl-0 {\n        margin-left: 0 !important;\n    }\n    .m-xl-1 {\n        margin: 0.5rem !important;\n    }\n    .mt-xl-1,\n    .my-xl-1 {\n        margin-top: 0.5rem !important;\n    }\n    .mr-xl-1,\n    .mx-xl-1 {\n        margin-right: 0.5rem !important;\n    }\n    .mb-xl-1,\n    .my-xl-1 {\n        margin-bottom: 0.5rem !important;\n    }\n    .ml-xl-1,\n    .mx-xl-1 {\n        margin-left: 0.5rem !important;\n    }\n    .m-xl-2 {\n        margin: 0.75rem !important;\n    }\n    .mt-xl-2,\n    .my-xl-2 {\n        margin-top: 0.75rem !important;\n    }\n    .mr-xl-2,\n    .mx-xl-2 {\n        margin-right: 0.75rem !important;\n    }\n    .mb-xl-2,\n    .my-xl-2 {\n        margin-bottom: 0.75rem !important;\n    }\n    .ml-xl-2,\n    .mx-xl-2 {\n        margin-left: 0.75rem !important;\n    }\n    .m-xl-3 {\n        margin: 1rem !important;\n    }\n    .mt-xl-3,\n    .my-xl-3 {\n        margin-top: 1rem !important;\n    }\n    .mr-xl-3,\n    .mx-xl-3 {\n        margin-right: 1rem !important;\n    }\n    .mb-xl-3,\n    .my-xl-3 {\n        margin-bottom: 1rem !important;\n    }\n    .ml-xl-3,\n    .mx-xl-3 {\n        margin-left: 1rem !important;\n    }\n    .m-xl-4 {\n        margin: 1.5rem !important;\n    }\n    .mt-xl-4,\n    .my-xl-4 {\n        margin-top: 1.5rem !important;\n    }\n    .mr-xl-4,\n    .mx-xl-4 {\n        margin-right: 1.5rem !important;\n    }\n    .mb-xl-4,\n    .my-xl-4 {\n        margin-bottom: 1.5rem !important;\n    }\n    .ml-xl-4,\n    .mx-xl-4 {\n        margin-left: 1.5rem !important;\n    }\n    .m-xl-5 {\n        margin: 2rem !important;\n    }\n    .mt-xl-5,\n    .my-xl-5 {\n        margin-top: 2rem !important;\n    }\n    .mr-xl-5,\n    .mx-xl-5 {\n        margin-right: 2rem !important;\n    }\n    .mb-xl-5,\n    .my-xl-5 {\n        margin-bottom: 2rem !important;\n    }\n    .ml-xl-5,\n    .mx-xl-5 {\n        margin-left: 2rem !important;\n    }\n    .m-xl-6 {\n        margin: 4rem !important;\n    }\n    .mt-xl-6,\n    .my-xl-6 {\n        margin-top: 4rem !important;\n    }\n    .mr-xl-6,\n    .mx-xl-6 {\n        margin-right: 4rem !important;\n    }\n    .mb-xl-6,\n    .my-xl-6 {\n        margin-bottom: 4rem !important;\n    }\n    .ml-xl-6,\n    .mx-xl-6 {\n        margin-left: 4rem !important;\n    }\n    .m-xl-7 {\n        margin: 6rem !important;\n    }\n    .mt-xl-7,\n    .my-xl-7 {\n        margin-top: 6rem !important;\n    }\n    .mr-xl-7,\n    .mx-xl-7 {\n        margin-right: 6rem !important;\n    }\n    .mb-xl-7,\n    .my-xl-7 {\n        margin-bottom: 6rem !important;\n    }\n    .ml-xl-7,\n    .mx-xl-7 {\n        margin-left: 6rem !important;\n    }\n    .p-xl-0 {\n        padding: 0 !important;\n    }\n    .pt-xl-0,\n    .py-xl-0 {\n        padding-top: 0 !important;\n    }\n    .pr-xl-0,\n    .px-xl-0 {\n        padding-right: 0 !important;\n    }\n    .pb-xl-0,\n    .py-xl-0 {\n        padding-bottom: 0 !important;\n    }\n    .pl-xl-0,\n    .px-xl-0 {\n        padding-left: 0 !important;\n    }\n    .p-xl-1 {\n        padding: 0.5rem !important;\n    }\n    .pt-xl-1,\n    .py-xl-1 {\n        padding-top: 0.5rem !important;\n    }\n    .pr-xl-1,\n    .px-xl-1 {\n        padding-right: 0.5rem !important;\n    }\n    .pb-xl-1,\n    .py-xl-1 {\n        padding-bottom: 0.5rem !important;\n    }\n    .pl-xl-1,\n    .px-xl-1 {\n        padding-left: 0.5rem !important;\n    }\n    .p-xl-2 {\n        padding: 0.75rem !important;\n    }\n    .pt-xl-2,\n    .py-xl-2 {\n        padding-top: 0.75rem !important;\n    }\n    .pr-xl-2,\n    .px-xl-2 {\n        padding-right: 0.75rem !important;\n    }\n    .pb-xl-2,\n    .py-xl-2 {\n        padding-bottom: 0.75rem !important;\n    }\n    .pl-xl-2,\n    .px-xl-2 {\n        padding-left: 0.75rem !important;\n    }\n    .p-xl-3 {\n        padding: 1rem !important;\n    }\n    .pt-xl-3,\n    .py-xl-3 {\n        padding-top: 1rem !important;\n    }\n    .pr-xl-3,\n    .px-xl-3 {\n        padding-right: 1rem !important;\n    }\n    .pb-xl-3,\n    .py-xl-3 {\n        padding-bottom: 1rem !important;\n    }\n    .pl-xl-3,\n    .px-xl-3 {\n        padding-left: 1rem !important;\n    }\n    .p-xl-4 {\n        padding: 1.5rem !important;\n    }\n    .pt-xl-4,\n    .py-xl-4 {\n        padding-top: 1.5rem !important;\n    }\n    .pr-xl-4,\n    .px-xl-4 {\n        padding-right: 1.5rem !important;\n    }\n    .pb-xl-4,\n    .py-xl-4 {\n        padding-bottom: 1.5rem !important;\n    }\n    .pl-xl-4,\n    .px-xl-4 {\n        padding-left: 1.5rem !important;\n    }\n    .p-xl-5 {\n        padding: 2rem !important;\n    }\n    .pt-xl-5,\n    .py-xl-5 {\n        padding-top: 2rem !important;\n    }\n    .pr-xl-5,\n    .px-xl-5 {\n        padding-right: 2rem !important;\n    }\n    .pb-xl-5,\n    .py-xl-5 {\n        padding-bottom: 2rem !important;\n    }\n    .pl-xl-5,\n    .px-xl-5 {\n        padding-left: 2rem !important;\n    }\n    .p-xl-6 {\n        padding: 4rem !important;\n    }\n    .pt-xl-6,\n    .py-xl-6 {\n        padding-top: 4rem !important;\n    }\n    .pr-xl-6,\n    .px-xl-6 {\n        padding-right: 4rem !important;\n    }\n    .pb-xl-6,\n    .py-xl-6 {\n        padding-bottom: 4rem !important;\n    }\n    .pl-xl-6,\n    .px-xl-6 {\n        padding-left: 4rem !important;\n    }\n    .p-xl-7 {\n        padding: 6rem !important;\n    }\n    .pt-xl-7,\n    .py-xl-7 {\n        padding-top: 6rem !important;\n    }\n    .pr-xl-7,\n    .px-xl-7 {\n        padding-right: 6rem !important;\n    }\n    .pb-xl-7,\n    .py-xl-7 {\n        padding-bottom: 6rem !important;\n    }\n    .pl-xl-7,\n    .px-xl-7 {\n        padding-left: 6rem !important;\n    }\n    .m-xl-auto {\n        margin: auto !important;\n    }\n    .mt-xl-auto,\n    .my-xl-auto {\n        margin-top: auto !important;\n    }\n    .mr-xl-auto,\n    .mx-xl-auto {\n        margin-right: auto !important;\n    }\n    .mb-xl-auto,\n    .my-xl-auto {\n        margin-bottom: auto !important;\n    }\n    .ml-xl-auto,\n    .mx-xl-auto {\n        margin-left: auto !important;\n    }\n}\n\n.flex-row {\n    flex-direction: row !important;\n}\n\n.flex-column {\n    flex-direction: column !important;\n}\n\n.flex-row-reverse {\n    flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n    flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n    flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n    flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n}\n\n.justify-content-start {\n    justify-content: flex-start !important;\n}\n\n.justify-content-end {\n    justify-content: flex-end !important;\n}\n\n.justify-content-center {\n    justify-content: center !important;\n}\n\n.justify-content-between {\n    justify-content: space-between !important;\n}\n\n.justify-content-around {\n    justify-content: space-around !important;\n}\n\n.align-items-start {\n    align-items: flex-start !important;\n}\n\n.align-items-end {\n    align-items: flex-end !important;\n}\n\n.align-items-center {\n    align-items: center !important;\n}\n\n.align-items-baseline {\n    align-items: baseline !important;\n}\n\n.align-items-stretch {\n    align-items: stretch !important;\n}\n\n.align-content-start {\n    align-content: flex-start !important;\n}\n\n.align-content-end {\n    align-content: flex-end !important;\n}\n\n.align-content-center {\n    align-content: center !important;\n}\n\n.align-content-between {\n    align-content: space-between !important;\n}\n\n.align-content-around {\n    align-content: space-around !important;\n}\n\n.align-content-stretch {\n    align-content: stretch !important;\n}\n\n.align-self-auto {\n    -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n}\n\n.align-self-start {\n    align-self: flex-start !important;\n}\n\n.align-self-end {\n    align-self: flex-end !important;\n}\n\n.align-self-center {\n    -ms-grid-row-align: center !important;\n        align-self: center !important;\n}\n\n.align-self-baseline {\n    align-self: baseline !important;\n}\n\n.align-self-stretch {\n    -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n    .flex-sm-row {\n        flex-direction: row !important;\n    }\n    .flex-sm-column {\n        flex-direction: column !important;\n    }\n    .flex-sm-row-reverse {\n        flex-direction: row-reverse !important;\n    }\n    .flex-sm-column-reverse {\n        flex-direction: column-reverse !important;\n    }\n    .flex-sm-wrap {\n        flex-wrap: wrap !important;\n    }\n    .flex-sm-nowrap {\n        flex-wrap: nowrap !important;\n    }\n    .flex-sm-wrap-reverse {\n        flex-wrap: wrap-reverse !important;\n    }\n    .justify-content-sm-start {\n        justify-content: flex-start !important;\n    }\n    .justify-content-sm-end {\n        justify-content: flex-end !important;\n    }\n    .justify-content-sm-center {\n        justify-content: center !important;\n    }\n    .justify-content-sm-between {\n        justify-content: space-between !important;\n    }\n    .justify-content-sm-around {\n        justify-content: space-around !important;\n    }\n    .align-items-sm-start {\n        align-items: flex-start !important;\n    }\n    .align-items-sm-end {\n        align-items: flex-end !important;\n    }\n    .align-items-sm-center {\n        align-items: center !important;\n    }\n    .align-items-sm-baseline {\n        align-items: baseline !important;\n    }\n    .align-items-sm-stretch {\n        align-items: stretch !important;\n    }\n    .align-content-sm-start {\n        align-content: flex-start !important;\n    }\n    .align-content-sm-end {\n        align-content: flex-end !important;\n    }\n    .align-content-sm-center {\n        align-content: center !important;\n    }\n    .align-content-sm-between {\n        align-content: space-between !important;\n    }\n    .align-content-sm-around {\n        align-content: space-around !important;\n    }\n    .align-content-sm-stretch {\n        align-content: stretch !important;\n    }\n    .align-self-sm-auto {\n        -ms-grid-row-align: auto !important;\n            align-self: auto !important;\n    }\n    .align-self-sm-start {\n        align-self: flex-start !important;\n    }\n    .align-self-sm-end {\n        align-self: flex-end !important;\n    }\n    .align-self-sm-center {\n        -ms-grid-row-align: center !important;\n            align-self: center !important;\n    }\n    .align-self-sm-baseline {\n        align-self: baseline !important;\n    }\n    .align-self-sm-stretch {\n        -ms-grid-row-align: stretch !important;\n            align-self: stretch !important;\n    }\n}\n\n@media (min-width: 768px) {\n    .flex-md-row {\n        flex-direction: row !important;\n    }\n    .flex-md-column {\n        flex-direction: column !important;\n    }\n    .flex-md-row-reverse {\n        flex-direction: row-reverse !important;\n    }\n    .flex-md-column-reverse {\n        flex-direction: column-reverse !important;\n    }\n    .flex-md-wrap {\n        flex-wrap: wrap !important;\n    }\n    .flex-md-nowrap {\n        flex-wrap: nowrap !important;\n    }\n    .flex-md-wrap-reverse {\n        flex-wrap: wrap-reverse !important;\n    }\n    .justify-content-md-start {\n        justify-content: flex-start !important;\n    }\n    .justify-content-md-end {\n        justify-content: flex-end !important;\n    }\n    .justify-content-md-center {\n        justify-content: center !important;\n    }\n    .justify-content-md-between {\n        justify-content: space-between !important;\n    }\n    .justify-content-md-around {\n        justify-content: space-around !important;\n    }\n    .align-items-md-start {\n        align-items: flex-start !important;\n    }\n    .align-items-md-end {\n        align-items: flex-end !important;\n    }\n    .align-items-md-center {\n        align-items: center !important;\n    }\n    .align-items-md-baseline {\n        align-items: baseline !important;\n    }\n    .align-items-md-stretch {\n        align-items: stretch !important;\n    }\n    .align-content-md-start {\n        align-content: flex-start !important;\n    }\n    .align-content-md-end {\n        align-content: flex-end !important;\n    }\n    .align-content-md-center {\n        align-content: center !important;\n    }\n    .align-content-md-between {\n        align-content: space-between !important;\n    }\n    .align-content-md-around {\n        align-content: space-around !important;\n    }\n    .align-content-md-stretch {\n        align-content: stretch !important;\n    }\n    .align-self-md-auto {\n        -ms-grid-row-align: auto !important;\n            align-self: auto !important;\n    }\n    .align-self-md-start {\n        align-self: flex-start !important;\n    }\n    .align-self-md-end {\n        align-self: flex-end !important;\n    }\n    .align-self-md-center {\n        -ms-grid-row-align: center !important;\n            align-self: center !important;\n    }\n    .align-self-md-baseline {\n        align-self: baseline !important;\n    }\n    .align-self-md-stretch {\n        -ms-grid-row-align: stretch !important;\n            align-self: stretch !important;\n    }\n}\n\n@media (min-width: 992px) {\n    .flex-lg-row {\n        flex-direction: row !important;\n    }\n    .flex-lg-column {\n        flex-direction: column !important;\n    }\n    .flex-lg-row-reverse {\n        flex-direction: row-reverse !important;\n    }\n    .flex-lg-column-reverse {\n        flex-direction: column-reverse !important;\n    }\n    .flex-lg-wrap {\n        flex-wrap: wrap !important;\n    }\n    .flex-lg-nowrap {\n        flex-wrap: nowrap !important;\n    }\n    .flex-lg-wrap-reverse {\n        flex-wrap: wrap-reverse !important;\n    }\n    .justify-content-lg-start {\n        justify-content: flex-start !important;\n    }\n    .justify-content-lg-end {\n        justify-content: flex-end !important;\n    }\n    .justify-content-lg-center {\n        justify-content: center !important;\n    }\n    .justify-content-lg-between {\n        justify-content: space-between !important;\n    }\n    .justify-content-lg-around {\n        justify-content: space-around !important;\n    }\n    .align-items-lg-start {\n        align-items: flex-start !important;\n    }\n    .align-items-lg-end {\n        align-items: flex-end !important;\n    }\n    .align-items-lg-center {\n        align-items: center !important;\n    }\n    .align-items-lg-baseline {\n        align-items: baseline !important;\n    }\n    .align-items-lg-stretch {\n        align-items: stretch !important;\n    }\n    .align-content-lg-start {\n        align-content: flex-start !important;\n    }\n    .align-content-lg-end {\n        align-content: flex-end !important;\n    }\n    .align-content-lg-center {\n        align-content: center !important;\n    }\n    .align-content-lg-between {\n        align-content: space-between !important;\n    }\n    .align-content-lg-around {\n        align-content: space-around !important;\n    }\n    .align-content-lg-stretch {\n        align-content: stretch !important;\n    }\n    .align-self-lg-auto {\n        -ms-grid-row-align: auto !important;\n            align-self: auto !important;\n    }\n    .align-self-lg-start {\n        align-self: flex-start !important;\n    }\n    .align-self-lg-end {\n        align-self: flex-end !important;\n    }\n    .align-self-lg-center {\n        -ms-grid-row-align: center !important;\n            align-self: center !important;\n    }\n    .align-self-lg-baseline {\n        align-self: baseline !important;\n    }\n    .align-self-lg-stretch {\n        -ms-grid-row-align: stretch !important;\n            align-self: stretch !important;\n    }\n}\n\n@media (min-width: 1200px) {\n    .flex-xl-row {\n        flex-direction: row !important;\n    }\n    .flex-xl-column {\n        flex-direction: column !important;\n    }\n    .flex-xl-row-reverse {\n        flex-direction: row-reverse !important;\n    }\n    .flex-xl-column-reverse {\n        flex-direction: column-reverse !important;\n    }\n    .flex-xl-wrap {\n        flex-wrap: wrap !important;\n    }\n    .flex-xl-nowrap {\n        flex-wrap: nowrap !important;\n    }\n    .flex-xl-wrap-reverse {\n        flex-wrap: wrap-reverse !important;\n    }\n    .justify-content-xl-start {\n        justify-content: flex-start !important;\n    }\n    .justify-content-xl-end {\n        justify-content: flex-end !important;\n    }\n    .justify-content-xl-center {\n        justify-content: center !important;\n    }\n    .justify-content-xl-between {\n        justify-content: space-between !important;\n    }\n    .justify-content-xl-around {\n        justify-content: space-around !important;\n    }\n    .align-items-xl-start {\n        align-items: flex-start !important;\n    }\n    .align-items-xl-end {\n        align-items: flex-end !important;\n    }\n    .align-items-xl-center {\n        align-items: center !important;\n    }\n    .align-items-xl-baseline {\n        align-items: baseline !important;\n    }\n    .align-items-xl-stretch {\n        align-items: stretch !important;\n    }\n    .align-content-xl-start {\n        align-content: flex-start !important;\n    }\n    .align-content-xl-end {\n        align-content: flex-end !important;\n    }\n    .align-content-xl-center {\n        align-content: center !important;\n    }\n    .align-content-xl-between {\n        align-content: space-between !important;\n    }\n    .align-content-xl-around {\n        align-content: space-around !important;\n    }\n    .align-content-xl-stretch {\n        align-content: stretch !important;\n    }\n    .align-self-xl-auto {\n        -ms-grid-row-align: auto !important;\n            align-self: auto !important;\n    }\n    .align-self-xl-start {\n        align-self: flex-start !important;\n    }\n    .align-self-xl-end {\n        align-self: flex-end !important;\n    }\n    .align-self-xl-center {\n        -ms-grid-row-align: center !important;\n            align-self: center !important;\n    }\n    .align-self-xl-baseline {\n        align-self: baseline !important;\n    }\n    .align-self-xl-stretch {\n        -ms-grid-row-align: stretch !important;\n            align-self: stretch !important;\n    }\n}\n\n.d-none {\n    display: none !important;\n}\n\n.d-inline {\n    display: inline !important;\n}\n\n.d-inline-block {\n    display: inline-block !important;\n}\n\n.d-block {\n    display: block !important;\n}\n\n.d-table {\n    display: table !important;\n}\n\n.d-table-row {\n    display: table-row !important;\n}\n\n.d-table-cell {\n    display: table-cell !important;\n}\n\n.d-flex {\n    display: flex !important;\n}\n\n.d-inline-flex {\n    display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n    .d-sm-none {\n        display: none !important;\n    }\n    .d-sm-inline {\n        display: inline !important;\n    }\n    .d-sm-inline-block {\n        display: inline-block !important;\n    }\n    .d-sm-block {\n        display: block !important;\n    }\n    .d-sm-table {\n        display: table !important;\n    }\n    .d-sm-table-row {\n        display: table-row !important;\n    }\n    .d-sm-table-cell {\n        display: table-cell !important;\n    }\n    .d-sm-flex {\n        display: flex !important;\n    }\n    .d-sm-inline-flex {\n        display: inline-flex !important;\n    }\n}\n\n@media (min-width: 768px) {\n    .d-md-none {\n        display: none !important;\n    }\n    .d-md-inline {\n        display: inline !important;\n    }\n    .d-md-inline-block {\n        display: inline-block !important;\n    }\n    .d-md-block {\n        display: block !important;\n    }\n    .d-md-table {\n        display: table !important;\n    }\n    .d-md-table-row {\n        display: table-row !important;\n    }\n    .d-md-table-cell {\n        display: table-cell !important;\n    }\n    .d-md-flex {\n        display: flex !important;\n    }\n    .d-md-inline-flex {\n        display: inline-flex !important;\n    }\n}\n\n@media (min-width: 992px) {\n    .d-lg-none {\n        display: none !important;\n    }\n    .d-lg-inline {\n        display: inline !important;\n    }\n    .d-lg-inline-block {\n        display: inline-block !important;\n    }\n    .d-lg-block {\n        display: block !important;\n    }\n    .d-lg-table {\n        display: table !important;\n    }\n    .d-lg-table-row {\n        display: table-row !important;\n    }\n    .d-lg-table-cell {\n        display: table-cell !important;\n    }\n    .d-lg-flex {\n        display: flex !important;\n    }\n    .d-lg-inline-flex {\n        display: inline-flex !important;\n    }\n}\n\n@media (min-width: 1200px) {\n    .d-xl-none {\n        display: none !important;\n    }\n    .d-xl-inline {\n        display: inline !important;\n    }\n    .d-xl-inline-block {\n        display: inline-block !important;\n    }\n    .d-xl-block {\n        display: block !important;\n    }\n    .d-xl-table {\n        display: table !important;\n    }\n    .d-xl-table-row {\n        display: table-row !important;\n    }\n    .d-xl-table-cell {\n        display: table-cell !important;\n    }\n    .d-xl-flex {\n        display: flex !important;\n    }\n    .d-xl-inline-flex {\n        display: inline-flex !important;\n    }\n}\n\n.d-print-block {\n    display: none !important;\n}\n\n@media print {\n    .d-print-block {\n        display: block !important;\n    }\n}\n\n.d-print-inline {\n    display: none !important;\n}\n\n@media print {\n    .d-print-inline {\n        display: inline !important;\n    }\n}\n\n.d-print-inline-block {\n    display: none !important;\n}\n\n@media print {\n    .d-print-inline-block {\n        display: inline-block !important;\n    }\n}\n\n@media print {\n    .d-print-none {\n        display: none !important;\n    }\n}\n\n.text-justify {\n    text-align: justify !important;\n}\n\n.text-nowrap {\n    white-space: nowrap !important;\n}\n\n.text-left {\n    text-align: left !important;\n}\n\n.text-right {\n    text-align: right !important;\n}\n\n.text-center {\n    text-align: center !important;\n}\n\n@media (min-width: 576px) {\n    .text-sm-left {\n        text-align: left !important;\n    }\n    .text-sm-right {\n        text-align: right !important;\n    }\n    .text-sm-center {\n        text-align: center !important;\n    }\n}\n\n@media (min-width: 768px) {\n    .text-md-left {\n        text-align: left !important;\n    }\n    .text-md-right {\n        text-align: right !important;\n    }\n    .text-md-center {\n        text-align: center !important;\n    }\n}\n\n@media (min-width: 992px) {\n    .text-lg-left {\n        text-align: left !important;\n    }\n    .text-lg-right {\n        text-align: right !important;\n    }\n    .text-lg-center {\n        text-align: center !important;\n    }\n}\n\n@media (min-width: 1200px) {\n    .text-xl-left {\n        text-align: left !important;\n    }\n    .text-xl-right {\n        text-align: right !important;\n    }\n    .text-xl-center {\n        text-align: center !important;\n    }\n}\n\n.text-muted {\n    color: #8d96a7 !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 0 0 .5rem;\n    font-weight: 600;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n}\n\nh3 {\n    font-size: 1.125rem;\n}\n\nh4 {\n    font-size: 1rem;\n}\n\nh5 {\n    font-size: 0.875rem;\n}\n\nh6 {\n    font-size: 0.75rem;\n}\n\np {\n    margin: 0 0 1rem;\n}\n\nul,\nol {\n    margin-left: 1.5rem;\n}\n\nul {\n    list-style-type: disc;\n}\n\nol {\n    list-style-type: decimal;\n}\n\na {\n    color: #1C7ED6;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\ncode,\npre {\n    border-radius: 3px;\n    font-family: \"Space Mono\", SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;\n    background: #f8f8fa;\n    border: 1px solid #eee;\n    color: #444;\n    font-size: 80%;\n    padding: 0;\n    -moz-tab-size: 3;\n    -o-tab-size: 3;\n    tab-size: 3;\n}\n\ncode {\n    padding: 0.1875rem 0.375rem;\n}\n\npre {\n    padding: .75rem 1rem;\n    margin: 1rem 0 2rem;\n    overflow: auto;\n}\n\npre code {\n    border-radius: 0;\n    border: 0;\n    font-size: 100%;\n    background: transparent;\n    padding: 0;\n}\n\nhr {\n    padding: 0;\n    margin: 2rem 0;\n    border: 0;\n    border-bottom: 1px solid #eee;\n}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    margin: 2rem 0;\n}\n\ntable td,\ntable th {\n    border: 1px solid #eee;\n    padding: 0.8rem;\n}\n\n.section {\n    padding: 5rem 0;\n}\n\n.section-dark {\n    background: #f8f8fa;\n}\n\n.section-title {\n    text-align: center;\n    margin: 0 0 2rem;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.section-description {\n    text-align: center;\n    color: #8d96a7;\n    margin: -1.5rem auto 3rem;\n    max-width: 48rem;\n    font-size: 1.125rem;\n}\n\n.section-action {\n    background: linear-gradient(to right, #1488cc, #2b32b2);\n    color: #fff;\n    text-align: center;\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n\n.section-action .section-description {\n    color: #fff;\n}\n\n.feature {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto 4rem;\n    max-width: 40rem;\n    text-align: center;\n}\n\n@media (min-width: 768px) {\n    .feature {\n        flex-direction: row;\n        text-align: left;\n        max-width: 60rem;\n    }\n    .feature:nth-child(even) {\n        flex-direction: row-reverse;\n    }\n    .feature:nth-child(even) .feature-description {\n        text-align: right;\n    }\n}\n\n.feature-description {\n    flex: 1;\n    padding: 1rem 2rem 0;\n    color: #656f83;\n}\n\n@media (min-width: 768px) {\n    .feature-description {\n        padding: 0 2rem 0;\n    }\n}\n\n.feature-image {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.feature-image img {\n    max-width: 20rem;\n}\n\n@media (min-width: 768px) {\n    .feature-image img {\n        max-width: 100%;\n    }\n}\n\n.feature-name {\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #4A4A4A;\n}\n\n.highlight .hll {\n    background-color: #ffc;\n}\n\n.highlight .c {\n    color: #999;\n}\n\n.highlight .k {\n    color: #069;\n}\n\n.highlight .o {\n    color: #555;\n}\n\n.highlight .cm {\n    color: #999;\n}\n\n.highlight .cp {\n    color: #099;\n}\n\n.highlight .c1 {\n    color: #999;\n}\n\n.highlight .cs {\n    color: #999;\n}\n\n.highlight .gd {\n    background-color: #fcc;\n    border: 1px solid #c00;\n}\n\n.highlight .ge {\n    font-style: italic;\n}\n\n.highlight .gr {\n    color: #f00;\n}\n\n.highlight .gh {\n    color: #030;\n}\n\n.highlight .gi {\n    background-color: #cfc;\n    border: 1px solid #0c0;\n}\n\n.highlight .go {\n    color: #aaa;\n}\n\n.highlight .gp {\n    color: #009;\n}\n\n.highlight .gu {\n    color: #030;\n}\n\n.highlight .gt {\n    color: #9c6;\n}\n\n.highlight .kc {\n    color: #069;\n}\n\n.highlight .kd {\n    color: #069;\n}\n\n.highlight .kn {\n    color: #069;\n}\n\n.highlight .kp {\n    color: #069;\n}\n\n.highlight .kr {\n    color: #069;\n}\n\n.highlight .kt {\n    color: #078;\n}\n\n.highlight .m {\n    color: #f60;\n}\n\n.highlight .s {\n    color: #d44950;\n}\n\n.highlight .na {\n    color: #4f9fcf;\n}\n\n.highlight .nb {\n    color: #366;\n}\n\n.highlight .nc {\n    color: #0a8;\n}\n\n.highlight .no {\n    color: #360;\n}\n\n.highlight .nd {\n    color: #99f;\n}\n\n.highlight .ni {\n    color: #999;\n}\n\n.highlight .ne {\n    color: #c00;\n}\n\n.highlight .nf {\n    color: #c0f;\n}\n\n.highlight .nl {\n    color: #99f;\n}\n\n.highlight .nn {\n    color: #0cf;\n}\n\n.highlight .nt {\n    color: #2f6f9f;\n}\n\n.highlight .nv {\n    color: #033;\n}\n\n.highlight .ow {\n    color: #000;\n}\n\n.highlight .w {\n    color: #bbb;\n}\n\n.highlight .mf {\n    color: #f60;\n}\n\n.highlight .mh {\n    color: #f60;\n}\n\n.highlight .mi {\n    color: #f60;\n}\n\n.highlight .mo {\n    color: #f60;\n}\n\n.highlight .sb {\n    color: #c30;\n}\n\n.highlight .sc {\n    color: #c30;\n}\n\n.highlight .sd {\n    font-style: italic;\n    color: #c30;\n}\n\n.highlight .s2 {\n    color: #c30;\n}\n\n.highlight .se {\n    color: #c30;\n}\n\n.highlight .sh {\n    color: #c30;\n}\n\n.highlight .si {\n    color: #a00;\n}\n\n.highlight .sx {\n    color: #c30;\n}\n\n.highlight .sr {\n    color: #3aa;\n}\n\n.highlight .s1 {\n    color: #c30;\n}\n\n.highlight .ss {\n    color: #fc3;\n}\n\n.highlight .bp {\n    color: #366;\n}\n\n.highlight .vc {\n    color: #033;\n}\n\n.highlight .vg {\n    color: #033;\n}\n\n.highlight .vi {\n    color: #033;\n}\n\n.highlight .il {\n    color: #f60;\n}\n\n.highlight .css .o,\n.highlight .css .o+.nt,\n.highlight .css .nt+.nt {\n    color: #999;\n}\n\n.highlight .language-bash::before,\n.highlight .language-sh::before {\n    color: #009;\n    content: \"$ \";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.highlight .language-powershell::before {\n    color: #009;\n    content: \"PM> \";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.demo {\n    background: linear-gradient(to right, #1488cc, #2b32b2);\n    height: 100vh;\n}\n\n.demo-toolbar {\n    height: 3rem;\n    background: transparent;\n    display: flex;\n    font-weight: 500;\n    font-size: 0.875rem;\n    position: fixed;\n    top: .5rem;\n    left: 0;\n    right: 0;\n    padding: 0 .5rem;\n}\n\n.demo-toolbar-link {\n    padding: 0 1rem;\n    min-width: 3rem;\n    height: 3rem;\n    text-align: center;\n    color: #fff;\n    transition: .3s background, .3s color;\n    display: inline-flex;\n    align-items: center;\n    border-radius: 3px;\n}\n\n.demo-toolbar-link svg {\n    width: 18px;\n    height: 18px;\n}\n\n.demo-toolbar-link:hover,\n.demo-toolbar-link.active {\n    color: #fff;\n    background: rgba(255, 255, 255, 0.1);\n    text-decoration: none;\n}\n\n.demo-container {\n    position: fixed;\n    top: 4rem;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    overflow: auto;\n}\n\n.demo-container::-webkit-scrollbar {\n    display: none;\n}\n\n.demo-wrapper {\n    margin: 1.5rem;\n    display: inline-block;\n    vertical-align: middle;\n    width: 1600px;\n    height: 900px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n}\n\n.demo-iframe {\n    width: 100%;\n    height: 100%;\n    border-radius: 2px;\n    background: #fff;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"page-single\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col col-login mx-auto\">\n\n                    <form class=\"card\"\n                        (submit)=\"onLoginSubmit()\">\n                        <div class=\"card-body p-6\">\n                            <div class=\"card-title\">Login</div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">Username</label>\n                                <input type=\"email\"\n                                    class=\"form-control\"\n                                    id=\"login-form.username\"\n                                    aria-describedby=\"usernameHelp\"\n                                    placeholder=\"Username\"\n                                    name=\"username\"\n                                    [(ngModel)]=\"username\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    Password\n                                </label>\n                                <input type=\"password\"\n                                    class=\"form-control\"\n                                    id=\"login-form.password\"\n                                    aria-describedby=\"passwordHelp\"\n                                    placeholder=\"Password\"\n                                    name=\"password\"\n                                    [(ngModel)]=\"password\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\"\n                                        class=\"custom-control-input\" />\n                                    <span class=\"custom-control-label\">Remember me</span>\n                                </label>\n                            </div>\n                            <div class=\"form-footer\">\n                                <button type=\"submit\"\n                                    class=\"btn btn-primary btn-block\">Sign in</button>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"text-center text-muted\">\n                        Don't have an account?\n                        <a [routerLink]=\"['/register']\">Register</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now loged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                // Redirects User To Login Screen
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                // Redirects User To Login Screen
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\n\n    <div class=\"container\">\n        <a class=\"navbar-brand\"\n            href=\"#\">EadsGraphic</a>\n        <button class=\"navbar-toggler\"\n            type=\"button\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbarsExampleDefault\"\n            aria-controls=\"navbarsExampleDefault\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\"\n            id=\"navbarsExampleDefault\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\"\n                        [routerLink]=\"['/']\">Home</a>\n                </li>\n\n                <li *ngIf=\"authService.loggedIn()\"\n                    [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\"\n                        [routerLink]=\"['/dashboard']\">Dashboard</a>\n                </li>\n\n                <li *ngIf=\"authService.loggedIn()\"\n                    [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\"\n                        [routerLink]=\"['/profile']\">Profile</a>\n                </li>\n\n                <li [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\"\n                        [routerLink]=\"['/login']\">Login</a>\n                </li>\n\n                <li>\n                    <a class=\"nav-link\"\n                        (click)='onLogoutClick()'\n                        href=\"#\">Logout</a>\n                </li>\n\n                <li [routerLinkActive]=\"['active']\"\n                    [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\"\n                        [routerLink]=\"['/register']\">Register</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"user\">\n        <h2 class=\"page-header\">{{user.name}}</h2>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">Username: {{user.username}}</li>\n            <li class=\"list-group-item\">Email: {{user.email}}</li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"page-single\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col col-login mx-auto\">\n\n                    <form class=\"card\"\n                        (submit)=\"onRegisterSubmit()\">\n                        <div class=\"card-body p-6\">\n                            <div class=\"card-title\">Register</div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\"\n                                    for=\"register-form.name\">Name</label>\n                                <input type=\"email\"\n                                    class=\"form-control\"\n                                    id=\"register-form.name\"\n                                    aria-describedby=\"nameHelp\"\n                                    placeholder=\"Name\"\n                                    name=\"name\"\n                                    [(ngModel)]=\"name\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\"\n                                    for=\"register-form.name\">Username</label>\n                                <input type=\"email\"\n                                    class=\"form-control\"\n                                    id=\"register-form.username\"\n                                    aria-describedby=\"usernameHelp\"\n                                    placeholder=\"Username\"\n                                    name=\"username\"\n                                    [(ngModel)]=\"username\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\"\n                                    for=\"register-form.name\">Email</label>\n                                <input type=\"email\"\n                                    class=\"form-control\"\n                                    id=\"register-form.email\"\n                                    aria-describedby=\"emailHelp\"\n                                    placeholder=\"Email\"\n                                    name=\"email\"\n                                    [(ngModel)]=\"email\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\"\n                                    for=\"register-form.name\">Password</label>\n                                <input type=\"password\"\n                                    class=\"form-control\"\n                                    id=\"register-form.password\"\n                                    aria-describedby=\"passwordHelp\"\n                                    placeholder=\"Password\"\n                                    name=\"password\"\n                                    [(ngModel)]=\"password\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\"\n                                        class=\"custom-control-input\" />\n                                    <span class=\"custom-control-label\">Agree to the <a href=\"#\">terms and policy</a></span>\n                                </label>\n                            </div>\n\n                            <div class=\"form-footer\">\n                                <button type=\"submit\"\n                                    class=\"btn btn-primary btn-block\">Create new account</button>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"text-center text-muted\">\n                        Already have account?\n                        <a [routerLink]=\"['/login']\">Login</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import Validation Service


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields Check
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        // Validate Email Address
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please fill out a valid email address', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now successfully registered!', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Whoops something went wrong!', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eg-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
    }
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        var tokenExpired = this.jwtHelperService.isTokenExpired(token);
        return !tokenExpired;
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('users/authenticate', user, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http
            .get('users/profile', {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined ||
            user.email === undefined ||
            user.username === undefined ||
            user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // tslint:disable-line
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/TylerEads/Desktop/mean-stack-demo/eads-graphic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map