webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../assets/images/profiles/tommygaessler.jpg?v=2\" alt=\"\"/>Tommy Gaessler</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a></li>\n        <li><a routerLink=\"/posts\" routerLinkActive=\"active\">Posts</a></li>\n        <li><a routerLink=\"/press\" routerLinkActive=\"active\">Press</a></li>\n        <li><a routerLink=\"/talks\" routerLinkActive=\"active\">Talks</a></li>\n        <li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"side\">\n  <a routerLink=\"/\">\n    <img class=\"profile-pic\" src=\"../assets/images/profiles/tommygaessler.jpg?v=2\" alt=\"Tommy Gaessler\" />\n  </a>\n  <div class=\"background-image\" style=\"background-image: url('../assets/images/profiles/background.jpg')\"></div>\n\n  <h3><a routerLink=\"/\" routerLinkActive=\"active\">Tommy Gaessler</a></h3>\n  <hr>\n  <nav class=\"page-links\">\n    <a routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a>\n    <a routerLink=\"/posts\" routerLinkActive=\"active\">Posts</a>\n    <a routerLink=\"/press\" routerLinkActive=\"active\">Press</a>\n    <a routerLink=\"/talks\" routerLinkActive=\"active\">Talks</a>\n    <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n  </nav>\n  <hr>\n  <nav class=\"social-links\">\n    <a href=\"https://apps.apple.com/developer/tommy-gaessler/id1186368320\" target=\"_blank\">\n      <i class=\"fa-brands fa-app-store-ios\"></i>\n    </a>\n    <a href=\"https://github.com/tommygaessler\" target=\"_blank\">\n      <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n    </a>\n    <a href=\"https://stackoverflow.com/users/6592510/tommygaessler\" target=\"_blank\">\n      <i class=\"fa-brands fa-stack-overflow\"></i>\n    </a>\n    <a href=\"https://www.npmjs.com/~tommygaessler\" target=\"_blank\">\n      <i class=\"fa-brands fa-npm\"></i>\n    </a>\n    <br class=\"no-mobile\">\n    <a href=\"https://linkedin.com/in/tommygaessler\" target=\"_blank\">\n      <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\n    </a>\n    <a href=\"https://twitter.com/tommygaessler\" target=\"_blank\">\n      <i class=\"fa-brands fa-x-twitter\"></i>\n    </a>\n    <a href=\"https://medium.com/@tommygaessler\" target=\"_blank\">\n      <i class=\"fa fa-medium\" aria-hidden=\"true\"></i>\n    </a>\n    <a href=\"https://youtube.com/@tommygaessler\" target=\"_blank\">\n      <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n    </a>\n  </nav>\n</div>\n\n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $('li a, .navbar-toggle').on('click', function () {
            $('.navbar-toggle').toggleClass('active');
        });
        $('.navbar-collapse a').on('click', function () {
            $(".navbar-collapse").collapse('hide');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_youtube_player__ = __webpack_require__("../../../../ng2-youtube-player/modules/ng2-youtube-player.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_tweet_lib_index__ = __webpack_require__("../../../../ng2-tweet/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_tweet_lib_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_tweet_lib_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__press_press_component__ = __webpack_require__("../../../../../src/app/press/press.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__talks_talks_component__ = __webpack_require__("../../../../../src/app/talks/talks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__press_press_component__["a" /* PressComponent */],
            __WEBPACK_IMPORTED_MODULE_13__talks_talks_component__["a" /* TalksComponent */],
            __WEBPACK_IMPORTED_MODULE_14__posts_posts_component__["a" /* PostsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_youtube_player__["a" /* YoutubePlayerModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_tweet_lib_index__["Ng2TweetModule"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_router__["a" /* routing */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__press_press_component__ = __webpack_require__("../../../../../src/app/press/press.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__talks_talks_component__ = __webpack_require__("../../../../../src/app/talks/talks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */],
    },
    {
        path: 'posts',
        component: __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */],
    },
    {
        path: 'press',
        component: __WEBPACK_IMPORTED_MODULE_4__press_press_component__["a" /* PressComponent */],
    },
    {
        path: 'talks',
        component: __WEBPACK_IMPORTED_MODULE_5__talks_talks_component__["a" /* TalksComponent */],
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */],
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  resize: none;\n}\n\np strong {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Contact</h1>\n\n<div class=\"alert alert-success text-center\" *ngIf=\"response\">\n  <p>{{ response }}</p>\n  <p (click)=\"sendAgain()\"><strong>Click here to send another email!</strong></p>\n</div>\n<div class=\"alert alert-danger text-center\" *ngIf=\"error\">\n  <p>{{ error }}</p>\n  <p (click)=\"sendAgain()\"><strong>Click here to send another email!</strong></p>\n</div>\n\n<p *ngIf=\"form\">Feel free to reach out, I'd love to hear from you!</p>\n\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"form\">\n  <div class=\"form-group\" [ngClass]=\"{'has-error': nameSuccess===false, 'has-success':nameSuccess }\">\n    <label for=\"name\">Your Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error': emailSuccess===false, 'has-success':emailSuccess }\">\n    <label for=\"email\">Your Email</label>\n    <input type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error': messageSuccess===false, 'has-success':messageSuccess }\">\n    <label for=\"message\">Your Message</label>\n    <textarea class=\"form-control\" rows=\"5\" id=\"message\" [(ngModel)]=\"message\" name=\"message\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-block\" [ngClass]=\"{'disabled': loading }\">\n      <span *ngIf=\"!loading\">Send</span>\n      <span *ngIf=\"loading\">Sending <i class=\"fa fa-circle-o-notch fa-spin fa-fw\"></i></span>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(http, router) {
        this.http = http;
        this.router = router;
        this.name = '';
        this.email = '';
        this.message = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('contacted')) {
            this.response = localStorage.getItem('contacted');
            this.form = false;
        }
        else {
            this.form = true;
        }
    };
    ContactComponent.prototype.sendAgain = function () {
        localStorage.removeItem('contacted');
        // maybe put email and name in localstorage to save in form?
        this.ngOnInit();
        this.response = null;
        this.error = null;
        this.message = '';
        this.messageSuccess = null;
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.name !== '') {
            this.nameSuccess = true;
        }
        else {
            this.nameSuccess = false;
        }
        if (this.email !== '' && emailRegex.test(this.email)) {
            this.emailSuccess = true;
        }
        else {
            this.emailSuccess = false;
        }
        if (this.message !== '') {
            this.messageSuccess = true;
        }
        else {
            this.messageSuccess = false;
        }
        if (this.nameSuccess && this.emailSuccess && this.messageSuccess) {
            this.loading = true;
            this.http.post('https://ujj9l4tjj6.execute-api.us-east-1.amazonaws.com/prod/sendgrid-email-serverless', { name: this.name, from_email: this.email, message: this.message }).map(function (response) { return response.json(); }).subscribe(function (response) {
                _this.loading = false;
                _this.form = false;
                _this.response = response.body;
                localStorage.setItem('contacted', _this.response);
            }, function (error) {
                _this.loading = false;
                _this.form = false;
                _this.error = error;
                localStorage.setItem('contacted', _this.error);
            });
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About Me</h1>\n<p>Hi I'm Tommy Gaessler!</p>\n\n<p>I am the Senior Product Manager - Platforms at <a href=\"https://zoom.com\" target=\"_blank\">Zoom</a>, managing <a href=\"https://app.zoom.us/wc\" target=\"_blank\">Web</a> and <a href=\"https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060160\" target=\"_blank\">VDI</a>.</p>\n\n<p>At Zoom, I have also been in positions such as Engineering Manager, Software Enginer, and Developer Advocate.</p>\n\n<p>Before Zoom, I was a founding engineer at <a href=\"https://www.linkedin.com/company/apostrophe-inc./about/\" target=\"_blank\">Apostrophe</a>, a <a href=\"https://www.techstars.com/portfolio?q=apostrophe&is_exit=true\" target=\"_blank\">Techstars Boulder</a> startup that was later acquired by <a href=\"https://centivo.com/\" target=\"_blank\">Centivo</a>.</p>\n\n<p>If you're using one of the products I manage, building with the <a href=\"https://developers.zoom.us/\" target=\"_blank\">Zoom Developer Platform</a>, want to <a routerLink=\"/talks\" routerLinkActive=\"active\">book me for a podcast, conference, or meetup talk</a>, or just want to connect, feel free to <a routerLink=\"/contact\" routerLinkActive=\"active\">reach out</a>, I'd love to hear from you!</p>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tweet_lib_index__ = __webpack_require__("../../../../ng2-tweet/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tweet_lib_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_tweet_lib_index__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(ng2TweetService) {
        this.ng2TweetService = ng2TweetService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_tweet_lib_index__["Ng2TweetService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_tweet_lib_index__["Ng2TweetService"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n}\n\nblockquote {\n  margin-bottom: 10px;\n}\n\n.article-link {\n  margin-bottom: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Posts</h1>\n\n<p>Blog posts and podcasts.</p>\n\n<ng-container *ngFor=\"let post of posts\">\n  <ng-container *ngIf=\"post.mediaType === 'image'\">\n    <a href=\"{{ post.link }}\" target=\"_blank\">\n      <img src=\"{{ post.media }}\" alt=\"\">\n    </a>\n  </ng-container>\n  <div *ngIf=\"post.mediaType === 'video'\" class=\"video-container\">\n    <youtube-player [videoId]=\"post.media\"></youtube-player>\n  </div>\n  <h2><a href=\"{{ post.link }}\" target=\"_blank\">{{ post.title }}</a></h2>\n  <blockquote>\n    {{ post.description }}\n    <h6>- {{ post.author }} | {{ post.date }}</h6>\n  </blockquote>\n  <p class=\"article-link\"><a href=\"{{ post.link }}\" target=\"_blank\">Read Full Post</a></p>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_posts_posts__ = __webpack_require__("../../../../../src/assets/posts/posts.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.posts = __WEBPACK_IMPORTED_MODULE_1__assets_posts_posts__["a" /* posts */];
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PostsComponent);

//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/press/press.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n}\n\nblockquote {\n  margin-bottom: 10px;\n}\n\n.article-link {\n  margin-bottom: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/press/press.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Press</h1>\n\n<p>News articles, video features, and more.</p>\n\n<ng-container *ngFor=\"let article of press\">\n  <ng-container *ngIf=\"article.mediaType === 'image'\">\n    <a href=\"{{ article.link }}\" target=\"_blank\">\n      <img src=\"{{ article.media }}\" alt=\"\">\n    </a>\n  </ng-container>\n  <div *ngIf=\"article.mediaType === 'video'\" class=\"video-container\">\n    <youtube-player [videoId]=\"article.media\"></youtube-player>\n  </div>\n  <h2><a href=\"{{ article.link }}\" target=\"_blank\">{{ article.title }}</a></h2>\n  <blockquote>\n    {{ article.description }}\n    <h6>- {{ article.author }} | {{ article.date }}</h6>\n  </blockquote>\n  <p class=\"article-link\"><a href=\"{{ article.link }}\" target=\"_blank\">Read Full Article</a></p>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/press/press.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_press_press__ = __webpack_require__("../../../../../src/assets/press/press.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PressComponent = (function () {
    function PressComponent() {
    }
    PressComponent.prototype.ngOnInit = function () {
        this.press = __WEBPACK_IMPORTED_MODULE_1__assets_press_press__["a" /* press */];
    };
    return PressComponent;
}());
PressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-press',
        template: __webpack_require__("../../../../../src/app/press/press.component.html"),
        styles: [__webpack_require__("../../../../../src/app/press/press.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PressComponent);

//# sourceMappingURL=press.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n  border: 3px solid #f3f4f5;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.well {\n  position: relative;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background: #f3f4f5;\n}\n\n.appstore {\n  position: absolute;\n  right: 19px;\n  bottom: 19px;\n}\n\n.appstore img {\n  border: none;\n  width: 145px;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n\nh2 a {\n  color: #666666;\n}\n\nh2 a:hover {\n  color: #777;\n}\n\n.languages {\n  margin-bottom: 0;\n}\n\n@media (max-width: 767px) {\n\n  .appstore {\n    position: relative;\n    right: 0;\n    bottom: 0;\n  }\n\n  .appstore img {\n    width: 145px;\n    margin-top: 16px;\n  }\n\n  .languages {\n    margin-bottom: 16px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Projects</h1>\n\n<p>Personal projects of mine.</p>\n\n<div *ngFor=\"let key of keys\">\n  <a *ngIf=\"projects[key].type==='web' || projects[key].type==='app'\" href=\"{{ projects[key].deployed }}\" target=\"_blank\">\n    <img src=\"{{ projects[key].image }}\" alt=\"\">\n  </a>\n\n  <div *ngIf=\"projects[key].type==='web/video'\" class=\"video-container\">\n    <youtube-player [videoId]=\"projects[key].video\"></youtube-player>\n  </div>\n\n  <div class=\"well\">\n\n      <h2>\n        <a href=\"{{ projects[key].deployed }}\" target=\"_blank\">\n          {{ projects[key].name }}\n        </a>\n      </h2>\n\n\n    <div class=\"share-buttons-desktop\">\n      <button shareButton=\"twitter\" [sbUrl]=\"projects[key].deployed\" [sbTitle]=\"'Check out ' + projects[key].name + ' by @tommygaessler!'\"  class=\"x-twitter\"><i class=\"fa-brands fa-x-twitter\" aria-hidden=\"true\"></i> Post</button>\n\n      <button shareButton=\"linkedin\" [sbUrl]=\"projects[key].deployed\" class=\"linkedin\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> Share</button>\n\n      <button shareButton=\"facebook\" [sbUrl]=\"projects[key].deployed\" class=\"facebook\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i> Share</button>\n    </div>\n\n    <p>\n      <a href=\"{{ projects[key].github }}\" target=\"_blank\">\n        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n        Github Repo\n      </a> |\n      <a *ngIf=\"projects[key].type==='app'\" href=\"{{ projects[key].deployed }}\" target=\"_blank\">\n        App Store\n        <i class=\"fa fa-apple\" aria-hidden=\"true\"></i>\n      </a>\n      <a *ngIf=\"projects[key].type==='web' || projects[key].type==='web/video'\" href=\"{{ projects[key].deployed }}\" target=\"_blank\">\n        Deployed Site\n        <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\n      </a>\n    </p>\n    <p [innerHTML]=\"projects[key].description\"></p>\n    <p [innerHTML]=\"projects[key].languages\" class=\"languages\"></p>\n    <div class=\"share-buttons-mobile\">\n      <button shareButton=\"twitter\" [sbUrl]=\"projects[key].deployed\" [sbTitle]=\"'Check out ' + projects[key].name + ' by @tommygaessler!'\"  class=\"x-twitter\"><i class=\"fa-brands fa-x-twitter\" aria-hidden=\"true\"></i> Post</button>\n\n      <button shareButton=\"linkedin\" [sbUrl]=\"projects[key].deployed\" class=\"linkedin\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> Share</button>\n\n      <button shareButton=\"facebook\" [sbUrl]=\"projects[key].deployed\" class=\"facebook\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i> Share</button>\n    </div>\n    <a *ngIf=\"projects[key].type==='app'\" href=\"{{ projects[key].deployed }}\" target=\"_blank\" class=\"appstore\">\n      <img src=\"../../assets/images/projects/appstore.svg\" alt=\"Download on the App Store\">\n    </a>\n  </div>\n</div>\n\n\n<h2>Retired Projects</h2>\n\n<p>Previous personal projects or client work of mine.</p>\n\n<div *ngFor=\"let key of retiredKeys\">\n  <a *ngIf=\"retiredProjects[key].type==='web' || retiredProjects[key].type==='app'\" href=\"{{ retiredProjects[key].deployed }}\" target=\"_blank\">\n    <img src=\"{{ retiredProjects[key].image }}\" alt=\"\">\n  </a>\n\n  <div *ngIf=\"retiredProjects[key].type==='web/video'\" class=\"video-container\">\n    <youtube-player [videoId]=\"retiredProjects[key].video\"></youtube-player>\n  </div>\n\n  <div class=\"well\">\n\n      <h2>\n        <a href=\"{{ retiredProjects[key].deployed }}\" target=\"_blank\">\n          {{ retiredProjects[key].name }}\n        </a>\n      </h2>\n\n\n    <div class=\"share-buttons-desktop\">\n      <button shareButton=\"twitter\" [sbUrl]=\"retiredProjects[key].deployed\" [sbTitle]=\"'Check out ' + retiredProjects[key].name + ' by @tommygaessler!'\"  class=\"x-twitter\"><i class=\"fa-brands fa-x-twitter\" aria-hidden=\"true\"></i> Post</button>\n\n      <button shareButton=\"linkedin\" [sbUrl]=\"retiredProjects[key].deployed\" class=\"linkedin\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> Share</button>\n\n      <button shareButton=\"facebook\" [sbUrl]=\"retiredProjects[key].deployed\" class=\"facebook\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i> Share</button>\n    </div>\n\n    <p>\n      <a href=\"{{ retiredProjects[key].github }}\" target=\"_blank\">\n        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n        Github Repo\n      </a> |\n      <a *ngIf=\"retiredProjects[key].type==='app'\" href=\"{{ retiredProjects[key].deployed }}\" target=\"_blank\">\n        App Store\n        <i class=\"fa fa-apple\" aria-hidden=\"true\"></i>\n      </a>\n      <a *ngIf=\"retiredProjects[key].type==='web' || retiredProjects[key].type==='web/video'\" href=\"{{ retiredProjects[key].deployed }}\" target=\"_blank\">\n        Deployed Site\n        <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\n      </a>\n    </p>\n    <p [innerHTML]=\"retiredProjects[key].description\"></p>\n    <p [innerHTML]=\"retiredProjects[key].languages\" class=\"languages\"></p>\n    <div class=\"share-buttons-mobile\">\n      <button shareButton=\"twitter\" [sbUrl]=\"retiredProjects[key].deployed\" [sbTitle]=\"'Check out ' + retiredProjects[key].name + ' by @tommygaessler!'\"  class=\"x-twitter\"><i class=\"fa-brands fa-x-twitter\" aria-hidden=\"true\"></i> Post</button>\n\n      <button shareButton=\"linkedin\" [sbUrl]=\"retiredProjects[key].deployed\" class=\"linkedin\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> Share</button>\n\n      <button shareButton=\"facebook\" [sbUrl]=\"retiredProjects[key].deployed\" class=\"facebook\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i> Share</button>\n    </div>\n    <a *ngIf=\"retiredProjects[key].type==='app'\" href=\"{{ retiredProjects[key].deployed }}\" target=\"_blank\" class=\"appstore\">\n      <img src=\"../../assets/images/projects/appstore.svg\" alt=\"Download on the App Store\">\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_projects_projects__ = __webpack_require__("../../../../../src/assets/projects/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_projects_retired_projects__ = __webpack_require__("../../../../../src/assets/projects/retired-projects.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = __WEBPACK_IMPORTED_MODULE_1__assets_projects_projects__["a" /* projects */];
        this.retiredProjects = __WEBPACK_IMPORTED_MODULE_2__assets_projects_retired_projects__["a" /* retiredProjects */];
        this.keys = Object.keys(__WEBPACK_IMPORTED_MODULE_1__assets_projects_projects__["a" /* projects */]);
        this.retiredKeys = Object.keys(__WEBPACK_IMPORTED_MODULE_2__assets_projects_retired_projects__["a" /* retiredProjects */]);
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/talks/talks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    width: 100%;\n    max-width: 200px;\n    margin: 20px;\n}\n\n@media (max-width: 514px) {\n    img {\n        max-width: 150px;\n        /* max-width: 100%;\n        margin-left: 0;\n        margin-right: 0;\n        margin-top: 30px;\n        margin-bottom: 30px; */\n    }\n}\n\n@media (max-width: 414px) {\n    img {\n        max-width: 100px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/talks/talks.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Talks</h1>\n\n<p>Conferences, meetups, webinars, schools, and more, that I've given talks at.</p>\n\n<img src=\"assets/images/talks/zoomtopia.png\" alt=\"Zoomtopia with Tommy Gaessler\">\n<img src=\"assets/images/talks/apiworld.webp\" alt=\"API World with Tommy Gaessler\">\n<img src=\"assets/images/talks/cu.webp\" alt=\"CU with Tommy Gaessler\">\n<img src=\"assets/images/talks/du.svg\" alt=\"DU with Tommy Gaessler\">\n<img src=\"assets/images/talks/denver-startup-week.png\" alt=\"Denver Startup Week with Tommy Gaessler\">\n<img src=\"assets/images/talks/regisjesuit.png\" alt=\"Regis Jesuit with Tommy Gaessler\">\n<img src=\"assets/images/talks/hackreactor.png\" alt=\"Hack Reactor with Tommy Gaessler\">\n<img src=\"assets/images/talks/galvanize.webp\" alt=\"Galvanize with Tommy Gaessler\">\n<img src=\"assets/images/talks/flatiron-school.png\" alt=\"Flatiron School with Tommy Gaessler\">\n<img src=\"assets/images/talks/nastd.png\" alt=\"NASTD with Tommy Gaessler\">\n<img src=\"assets/images/talks/boulderjs.jpeg\" alt=\"BoulderJS with Tommy Gaessler\">\n<img src=\"assets/images/talks/rocky-mountain-anuglar.jpeg\" alt=\"Rocky Mountain Angular with Tommy Gaessler\">\n<img src=\"assets/images/talks/techsoft3d.svg\" alt=\"Tech Soft 3D with Tommy Gaessler\">\n<img src=\"assets/images/talks/priority-paradigm.png\" alt=\"Priority Paradigm with Tommy Gaessler\">\n<img src=\"assets/images/talks/frontrange-frontend.png\" alt=\"Frontrange Frontend with Tommy Gaessler\">"

/***/ }),

/***/ "../../../../../src/app/talks/talks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_talks_talks__ = __webpack_require__("../../../../../src/assets/talks/talks.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalksComponent = (function () {
    function TalksComponent() {
    }
    TalksComponent.prototype.ngOnInit = function () {
        this.talks = __WEBPACK_IMPORTED_MODULE_1__assets_talks_talks__["a" /* talks */];
    };
    return TalksComponent;
}());
TalksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-talks',
        template: __webpack_require__("../../../../../src/app/talks/talks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/talks/talks.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TalksComponent);

//# sourceMappingURL=talks.component.js.map

/***/ }),

/***/ "../../../../../src/assets/posts/posts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return posts; });
var posts = [
    {
        title: 'Unsplash Chatbot for Zoom Team Chat',
        date: 'Nov 20, 2024',
        description: 'How to Build a Zoom Chatbot from scratch using Node.js, PostgreSQL, the Unsplash API, and Heroku. In this article we will build a Zoom Chatbot that sends Unsplash photos! You can code along or you can skip the coding and one click deploy...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-developer-chatbot-unsplash.webp',
        link: 'https://developers.zoom.us/blog/unsplash-chatbot-for-zoom-team-chat/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Voice AI at Zoom | Tommy Gaessler',
        date: 'Aug 1, 2024',
        description: 'This episode\'s guest is Tommy Gaessler, Lead Developer Advocate/Engineer, SDK at Zoom...',
        mediaType: 'image',
        media: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fff939cbe-bcd3-4310-8e31-b38b527c5aa9_1200x1200.png',
        link: 'https://voice-ai-newsletter.krisp.ai/p/voice-ai-at-zoom-tommy-gaessler-lead',
        author: 'Davit Baghdasaryan ft. Tommy Gaessler | Krisp Voice AI Podcast'
    },
    {
        title: 'The Video SDK UI Toolkit is here!',
        date: 'Apr 11, 2024',
        description: 'The Zoom Video UI Toolkit allow you to embed a custom video experience in your iOS, Android, or Web apps with just a few lines of code. This reduces the amount of development effort required for implementing a video chat experience, and allows you to...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/tommygaessler/videosdk-ui-toolkit-web/nextImageExportOptimizer/cover-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/videosdk-ui-toolkits/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to use Twilio IVR Dial Trees with the Zoom Meeting SDK',
        date: 'Feb 6, 2024',
        description: 'One of the advantages of the Zoom Meeting SDK is our PSTN and SIP call out/call in compatibility. This allows developers to connect phone users to Zoom Meetings. Going a step further, PSTN and SIP support allows the Meeting SDK to be used with complex IVR dial tree use cases...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/tommygaessler/twilioivr/nextImageExportOptimizer/cover-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/ivr-dial-trees-with-meeting-sdk/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to use Twilio IVR Dial Trees with the Zoom Video SDK',
        date: 'Feb 6, 2024',
        description: 'One of the advantages of the Zoom Video SDK is our PSTN and SIP call out/call in compatibility. This allows developers to connect phone users to Video SDK Sessions. Going a step further, PSTN and SIP support allows the Video SDK to be used with complex IVR dial tree use cases...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/tommygaessler/twilioivr/nextImageExportOptimizer/cover-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/ivr-dial-trees-with-video-sdk/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to build a Meeting SDK join link',
        date: 'Feb 6, 2024',
        description: 'The Meeting SDK allows developers to embed the Zoom Meeting or Webinar experience in their webpage or apps. Once you have built your implementation, how do you get your users into your meeting? Well since your it\'s your webpage or app that your users are using, it\'s up to you to decide your user experience. Users could open your app when it\'s time to join the meeting and navigate to your join meeting flow. Or, you could build a join link and send that to your users or add it to your calendar invites, so users can join into your Meeting SDK meeting easier...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/tommygaessler/meetinglink/nextImageExportOptimizer/cover-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/meeting-sdk-join-link/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to build a Video SDK join link',
        date: 'Feb 6, 2024',
        description: 'The Zoom Video SDK allows developers to build custom video experiences with Zoom\'s core technology. Once you have built your implementation, how do you get your users into your session? Well since your it\'s your webpage or app that your users are using, it\'s up to you to decide your user experience. Users could open your app when it\'s time to join the session and navigate to your join session flow. Or, you could build a join link and send that to your users or add it to your calendar invites, so users can join into your Video SDK session easier.',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/tommygaessler/videolink/nextImageExportOptimizer/cover-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/video-sdk-join-link/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Video SDK fact sheet',
        date: 'Jan 10, 2024',
        description: 'Video is core to Zoom\'s business. The Zoom Video SDK is Zoom\'s core technology, packaged for developers, enabling them to build custom experiences. Here are the facts about the Zoom Video SDK developer platform...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/tommygaessler/video-sdk-fact-sheet/nextImageExportOptimizer/fact-sheet-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/video-sdk-fact-sheet/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Bring industry-leading video to your application with the Zoom Video SDK',
        date: 'Oct 24, 2023',
        description: 'Video creates endless possibilities for engagement and collaboration — and when it\s built seamlessly into an app or website, it makes the experience that much better. From virtual coaching to fitness classes to real estate management, companies are using the Zoom Video SDK (software development kit) to bring our HD video, audio, and interactive features into their video-based applications and desktop experiences.',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-blog-videosdk.jpeg',
        link: 'https://www.zoom.com/en/blog/bring-industry-leading-video-to-your-application-with-zoom-video-sdk/',
        author: 'Tommy Gaessler | Zoom Blog'
    },
    {
        title: 'How to limit who can install my Marketplace App',
        date: 'Aug 23, 2023',
        description: 'To share your OAuth or Team Chat app to Zoom users outside of your account, you will need to publish it to the Zoom App Marketplace. If you want to limit who can install and use your published app, for example, your existing users or customers, you can do so by...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/devsupport/nextImageExportOptimizer/limit-1-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/limit-who-can-install-your-app/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to embed Zoom into a website',
        date: 'Aug 22, 2023',
        description: 'There are two Web based SDKs that allow Zoom to be embedded into a website...',
        mediaType: 'image',
        media: 'https://i.pcmag.com/imagery/articles/02xOYOwe10QJxwhjSiJWRZI-1..1616423451.jpg',
        link: 'https://developers.zoom.us/blog/how-to-embed-zoom-into-website/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Migrating from collecting developer credentials to a supported flow',
        date: 'Aug 22, 2023',
        description: 'Zoom strives to support as many unique use cases as possible; however, we do not support entities collecting an external Zoom account\'s developer credentials for their integrations. In other words, Company A should not collect Company B\'s Client ID and Client Secret. There are a number of ways to build powerful Zoom integrations that can leverage Zoom user OAuth, Zoom API Users, and more...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/devsupport/nextImageExportOptimizer/Warmly-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/migrating-from-collecting-credentials-to-supported-flow/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Best practices using the Meeting SDK in an iFrame',
        date: 'May 11, 2023',
        description: 'Zoom recommends using the Meeting SDK for web directly on the webpage it is being used in. However, certain use cases could require the Meeting SDK to be embedded in an iFrame on a webpage. Here are the best practices for using the Meeting SDK in an iFrame...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/meeting-sdk-iframe/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Developer Platform - Build with core Zoom technology using our Video SDK',
        date: 'May 1, 2023',
        description: 'Learn just how simple it is to use core Zoom technology via our Video SDK to build custom video, audio, screen share, and chat experiences for any industry or use case including gaming, fitness, hardware, finance, telehealth, and social shopping. See how Tribe Fitness implemented Zoom video and audio into their omnichannel fitness platform...',
        mediaType: 'video',
        media: 'CgE-m6RkzHQ',
        link: 'https://www.youtube.com/watch?v=CgE-m6RkzHQ',
        author: 'Tommy Gaessler | Zoom Youtube'
    },
    {
        title: 'Zoom + AWS Virtual Participant Framework now available on Github',
        date: 'Mar 24, 2023',
        description: 'We\'re pleased to announce that the AWS Virtual Participant Framework for RTC open-source project is now available to you and your developers on GitHub.',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-aws.jpeg',
        link: 'https://www.zoom.com/en/blog/zoom-aws-virtual-participant-framework/',
        author: 'Tommy Gaessler | Zoom Blog'
    },
    {
        title: 'Best practices using the Meeting SDK in an Android WebView',
        date: 'Mar 3, 2023',
        description: 'Zoom recommends using the Meeting SDK for Android in native Android apps. However, if you are optimizing your Android app for package size, the Meeting SDK for web can be embedded in an Android WebView. This is now supported in Meeting SDK for web 2.10.1 and above. Here are the best practices for using the Meeting SDK for web in an Android WebView...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/meeting-sdk-android-webview/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Best practices using the Meeting SDK in an iOS WebView',
        date: 'Mar 3, 2023',
        description: 'Zoom recommends using the Meeting SDK for iOS in native iOS apps. However, if you are optimizing your iOS app for package size, the Meeting SDK for web can be embedded in an iOS WebView. This is now supported in Meeting SDK for web 2.10.1 and above. Here are the best practices for using the Meeting SDK for web in an iOS WebView...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/meeting-sdk-ios-webview/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Best practices using the Video SDK in an iFrame',
        date: 'Mar 3, 2023',
        description: 'Zoom recommends using the Video SDK for web directly on the webpage it is being used in. However, certain use cases could require the Video SDK to be embedded in an iFrame on a webpage. Here are the best practices for using the Video SDK in an iFrame...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/video-sdk-iframe/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Best practices using the Video SDK in an Android WebView',
        date: 'Mar 3, 2023',
        description: 'Zoom recommends using the Video SDK for Android in native Android apps. However, if you are optimizing your Android app for package size, the Video SDK for web can be embedded in an Android WebView. This is now supported in Video SDK for web 1.5.5 and above. Here are the best practices for using the Video SDK for web in an Android WebView...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/video-sdk-android-webview/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Best practices using the Video SDK in an iOS WebView',
        date: 'Mar 3, 2023',
        description: 'Zoom recommends using the Video SDK for iOS in native iOS apps. However, if you are optimizing your iOS app for package size, the Video SDK for web can be embedded in an iOS WebView. This is now supported in Video SDK for web 1.5.5 and above. Here are the best practices for using the Video SDK for web in an iOS WebView...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/video-sdk-ios-webview/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to customize the Meeting SDK for web',
        date: 'Jan 30, 2023',
        description: 'Currently the Meeting SDK for web has limited customization options. Some buttons and functionality can be customized, but the SDK is not intended to be used to completely customize the Meeting infterface. Use the Meeting SDK for web reference for a full list of which buttons and functions are customizable. For example, to hide the invite button...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/customize-meeting-sdk-for-web/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Zoom\'s Video SDK-Powered Claw Machine',
        date: 'Nov 2nd, 2022',
        description: 'What happens when you combine Zoom\'s core technology with an immersive, hands-on experience? Check out our custom-built Zoom Claw Machine, powered by the Zoom Video SDK...',
        mediaType: 'video',
        media: 'bvz1-LsyRB8',
        link: 'https://www.youtube.com/watch?v=bvz1-LsyRB8',
        author: 'Chun Siong Tan | Jenzus Hsu | Bruce Lee | Boon Tan | Tommy Gaessler | Zoom Youtube'
    },
    {
        title: 'How the Zoom Meeting SDKs are versioned',
        date: 'Sep 7th, 2022',
        description: 'The Zoom Meeting SDKs follow the semantic versioning scheme...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/meeting-sdk-versioning/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How the Zoom Video SDKs are versioned',
        date: 'Sep 7th, 2022',
        description: 'The Zoom Video SDKs follow the semantic versioning scheme...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/video-sdk-versioning/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to build breakout rooms in the Video SDK for web',
        date: 'Sep 1, 2022',
        description: 'Note: The Video SDK now has a built in breakout room feature set called "Subsessions". This article demonstrates how to implement a breakout room solution for the Video SDK for Web. Similar to Zoom Meetings, a participant can only be in one Video SDK session at a time, but you can bounce back and forth between sessions...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/build-breakout-rooms-for-video-sdk/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How long does the App Review Process take?',
        date: 'May 11, 2022',
        description: 'Apps are reviewed on a first come first serve basis. Our team reviews apps Monday-Friday. We have a 72 hour first response SLA, and typically respond within 36 hours of your submission. To ensure you have the fastest review, complete the submission checklist before submitting...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/how-long-does-app-review-take/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'IT 101 Frameworks for Product Developers',
        date: 'Apr 12, 2022',
        description: 'NASTD Past President Brad Steele (MA) discusses frameworks for product developers with Tommy Gaessler, lead developer advocate with corporate affiliate member Zoom...',
        mediaType: 'video',
        media: 'ARxVGozETPw',
        author: 'Brad Steele ft. Tommy Gaessler | National Association of State Technology Directors (NASTD)'
    },
    {
        title: 'Drive App Discovery with Latest Zoom App Marketplace Updates',
        date: 'Mar 23, 2022',
        description: 'Our App Marketplace team has made updates designed to help improve customer and end-user discovery and adoption of your apps and services.',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-marketplace-updates.jpeg',
        link: 'https://www.zoom.com/en/blog/zoom-app-marketplace-updates/',
        author: 'Tommy Gaessler | Zoom Blog'
    },
    {
        title: 'Livestream your DJI Drone with Amazon IVS',
        date: 'Mar 1, 2022',
        description: 'Have you ever wished you could share your drone footage in real time, anywhere in the world? Amazon IVS makes that possible. With Amazon IVS I built a simple website that generates a DJI compatible RTMP...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-ivs-drone.webp',
        link: 'https://medium.com/@tommygaessler/livestream-your-dji-drone-with-amazon-ivs-28cd0d327cb1?sk=fd75203ff3e9ed90e9eb73c8329a7743',
        author: 'Tommy Gaessler | My Medium Blog'
    },
    {
        title: 'Livestream from the Web with Zoom Video SDK to Amazon IVS',
        date: 'Mar 1, 2022',
        description: 'Using Zoom\'s new Video SDK, (a no UI, video, audio, screenshare, chat, and data channel as a service SDK), I built a web app where you can...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-ivs-zoom-videosdk.webp',
        link: 'https://medium.com/@tommygaessler/livestream-from-the-web-with-zoom-video-sdk-to-amazon-ivs-c3e84f034a56?sk=a5b83243184ae5deb1baf7e8c64fca48',
        author: 'Tommy Gaessler | My Medium Blog'
    },
    {
        title: 'Purposeful Innovation with the Zoom Developer Platform',
        date: 'Oct 18, 2021',
        description: 'Learn more about the Zoom Developer Platform, which enables app developers to build apps using Zoom\'s video-based communication technology.',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-developer-platform.jpeg',
        link: 'https://www.zoom.com/en/blog/purposeful-innovation-with-zoom-developer-platform/',
        author: 'Tommy Gaessler | Zoom Blog'
    },
    {
        title: 'Fixing a black screen on the Meeting SDK for web',
        date: 'Aug 12, 2021',
        description: 'To fix the black screen issue on the Web Meeting SDK follow the steps outlined below...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/fix-black-screen-meeting-sdk/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'How to use the Meeting SDK in an Angular app',
        date: 'Aug 13, 2021',
        description: 'In this guide, we\'ll walk through integrating the Meeting SDK for web into an Angular application...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/how-to-use-meeting-sdk-angular-application/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Resolving webhook delays',
        date: 'May 11, 2021',
        description: 'Webhook Delays can be cause by Zoom not receiving a 200 OK response from your Event Notification Endpoint URL after you receive a Webhook. After receiving a Webhook, your Event Notification Endpoint URL should respond with either a 200 or a 204 HTTP status code within three seconds for Zoom to consider that the notification was successfully delivered...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/webhook-delays/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'What happens to my current users when I am updating my published app',
        date: 'May 11, 2021',
        description: 'During an update review, your existing published app and users will not be affected. Your changes will take affect in the Development Environment of your app. Once you submit the update request and it is approved, then your Production Environment will be updated with the changes. Users will...',
        mediaType: 'image',
        media: 'https://developers.zoom.us/img/blog/nextImageExportOptimizer/blog-placeholder-opt-1920.WEBP',
        link: 'https://developers.zoom.us/blog/what-happens-to-users-when-updating-apps/',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Bring Industry-Leading Video to Your Application with Zoom\'s Video SDK',
        date: 'Mar 22, 2021',
        description: 'Video creates endless possibilities for engagement and collaboration — and when it\'s built seamlessly into an app or website, it makes the experience that much better. From virtual coaching to fitness classes to real estate management, companies are using the Zoom Video SDK (software development kit) to bring our HD video, audio, and interactive features into their video-based applications and desktop experiences.',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-videosdk-original.jpeg',
        link: 'https://www.zoom.com/en/blog/bring-industry-leading-video-to-your-application-with-zooms-video-sdk/',
        author: 'Tommy Gaessler | Zoom Blog'
    },
    {
        title: 'We Now Have More Than 1,000 Apps on the Zoom App Marketplace to Help You Work Better',
        date: 'Feb 12, 2021',
        description: 'The Zoom App Marketplace now hosts over 1,000 apps and integrations for Zoom Meetings, Zoom Webinar, Zoom Rooms, Zoom Phone, and Zoom Team Chat.',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-marketplace-1000.png',
        link: 'https://www.zoom.com/en/blog/we-now-have-more-than-1000-apps-on-the-zoom-app-marketplace/',
        author: 'Tommy Gaessler | Zoom Blog'
    },
    // https://www.youtube.com/watch?v=EwpXRbGzVO4 zoom app marketplace competition
    {
        title: 'Catbot Tutorial using Zoom Chatbot CLI',
        date: 'Apr 21, 2020',
        description: 'How to build a Zoom Chatbot that sends random cat pictures! The Zoom Node.js Chatbot Command Line Interface accelerates the Zoom Chatbot development process. To get started follow the instructions...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-developer-catbot.webp',
        link: 'https://medium.com/@tommygaessler/catbot-tutorial-using-zoom-chatbot-cli-db7fb76166fe',
        author: 'Tommy Gaessler | My Medium Blog'
    },
    {
        title: 'Beyond 3D Podcast: The Future of Software Development, Trends in AR/VR and Collaboration',
        date: 'Mar 19, 2020',
        description: 'In this episode of Beyond 3D we talk with Tommy Gaessler, one of the top 25 most influential developer advocates for 2019, and a developer advocate at Zoom. We talk about the current state of software development, opportunities and challenges, and where things are going with trends such as AR/VR....',
        mediaType: 'image',
        media: 'https://i1.sndcdn.com/artworks-miGehVOZ9COhDDsH-9HW3IQ-t1080x1080.jpg',
        link: 'https://www.techsoft3d.com/resources/blog/beyond-3d-the-future-of-software-development-trends-in-ar-vr-and-collaboration/',
        author: 'Tommy Gaessler | TechSoft3D Beyond 3D Podcast'
    },
    {
        title: 'A to Z: Leaving Apostrophe, joining Zoom',
        date: 'Aug 30, 2019',
        description: 'The decision to leave Apostrophe was a hard one. I was employee #3, I had the privilege of going through the Techstars Boulder Accelerator, I made amazing relationships and friends, and helped Apostrophe grow...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-a-to-z.webp',
        link: 'https://medium.com/@tommygaessler/a-to-z-leaving-apostrophe-joining-zoom-37843b48bfde',
        author: 'Tommy Gaessler | My Medium Blog'
    },
    {
        title: 'Testing Zoom Chatbots in Postman',
        date: 'Jul 12, 2019',
        description: 'Send Zoom Chatbot messages in 3 easy steps! — New: Chatbot messages now support Markdown and @mentions! An example has been added to the Zoom Chatbot Postman Collection. Create a Chatbot...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-zoom-developer-postman-chatbot.webp',
        link: 'https://medium.com/zoom-developer-blog/testing-zoom-chatbots-in-postman-b169b889b61f',
        author: 'Tommy Gaessler | Zoom Developer Blog'
    },
    {
        title: 'Tommy Gaessler: Successfully Following a Passion to Create with Code',
        date: 'Sep 25, 2018',
        description: 'Dodging his the counselors at his college-prep high school, Tommy already knew the direction that he wanted for life. He\'d discovered and fallen in love with computer coding. To pursue his passion, Tommy had to make a choice. Either he would head to university and get a traditional degree or do something completely different. Tommy\'s choice led him to Galvanize, and quickly to his first job and an opportunity to learn at TechStars...',
        mediaType: 'video',
        media: 'cMeYJrgnqf8',
        link: 'https://www.youtube.com/watch?v=cMeYJrgnqf8',
        author: 'Shea Oliver ft. Tommy Gaessler | The Priority Paradigm'
    },
    {
        title: 'Highlights of Denver Startup Week!',
        date: 'Sep 29, 2017',
        description: 'Last year, Denver Startup Week was amazing, some even said unbeatable! But Erik Mitisek, Tami Door, and Ben Deda have stepped up the game once again, breaking every record in the book and...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-denver-startup-week.webp',
        link: 'https://medium.com/@tommygaessler/highlights-of-denver-startup-week-2017-b8e728a2b771',
        author: 'Tommy Gaessler | My Medium Blog'
    },
    {
        title: 'I turn 20 tomorrow',
        date: 'Jun 4, 2017',
        description: 'Looking back on the past 19 years, I have always loved Legos. This picture is me at a Lego building contest when I was 5. I\'ve accomplished so much while living the 19th year of my life, and I...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-lego.webp',
        link: 'https://medium.com/@tommygaessler/i-turn-20-tomorrow-200a86d84d6d',
        author: 'Tommy Gaessler | My Medium Blog'
    },
    {
        title: 'How I landed my dream job at 19 years old',
        date: 'Mar 22, 2017',
        description: 'I had no idea that I would be in Techstars helping to build an exciting startup 8 months after graduating from high school. Here\'s how it happened, I graduated from Regis Jesuit High School in May, decided...',
        mediaType: 'image',
        media: 'assets/images/posts/tommygaessler-jasoncalacanis-techstars.png',
        link: 'https://startupsventurecapital.com/how-i-landed-my-dream-job-at-19-years-old-b076ec4e8ad7',
        author: 'Tommy Gaessler | Startups & Venture Capital Blog'
    }
];
//# sourceMappingURL=posts.js.map

/***/ }),

/***/ "../../../../../src/assets/press/press.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return press; });
var press = [
    {
        title: 'From high school to bootcamp to lasting career in tech',
        date: 'May 5, 2023',
        description: 'Tommy Gaessler graduated from our Intermediate Coding Bootcamp back in 2016. His initial interest in coding began early in life, inspired by playing Minecraft with friends and pursued through high school coding courses. After high school, he enrolled in the bootcamp and launched a career that he\'s still enjoying today, now as a Senior Developer Advocate and Software Engineer at Zoom.',
        mediaType: 'image',
        media: 'assets/images/press/tommygaessler-galvanize.png',
        link: 'https://www.galvanize.com/student-stories/tommy-gaessler-from-high-school-to-bootcamp-to-lasting-career-in-tech/',
        author: 'Galvanize | Hack Reactor'
    },
    {
        title: 'Tribe upgrades online fitness classes from local studios',
        date: 'May 5, 2023',
        description: 'After migrating to Zoom\'s Video SDK, Tribe was able to significantly enhance the application experience for users while also lowering their CPU usage. Zoom\'s lead developer advocate for Video SDK, Tommy Gaessler, was extremely helpful in providing technical guidance during our development.',
        mediaType: 'image',
        media: 'https://media.zoom.com/images/assets/Tribe.webp/Zz1lZjE0NDU5OGUzYzYxMWVmYjU2ZjJlZWM1MTAwNWE4Nw==?t=20250513024547',
        link: 'https://www.zoom.com/en/customer-stories/tribe/',
        author: 'Zoom | Tribe'
    },
    {
        title: 'Top 20 Developer Advocates',
        date: 'Jan 16, 2020',
        description: 'As a Developer Advocate for Zoom, Tommy focuses on the API and Developer Relations side of Zoom\'s App Marketplace. He has many laudable projects under his belt, and was named one of the top 15 innovators in Colorado under 25 in 2019. Tommy is the editor of the Zoom Developer Blog, and also authors many articles himself. He specializes in Node.js, Angular, and Amazon Web Services.',
        mediaType: 'image',
        media: 'assets/images/press/tommygaessler-top-20-developer-advocates.jpeg',
        link: 'https://www.mend.io/resources/blog/top-20-developer-advocates-to-follow/',
        author: 'Mend'
    },
    {
        title: 'Meet Colorado\'s Top 15 Entrepreneurs and Innovators Under 25 Years Old!',
        date: 'Sep 18, 2019',
        description: 'Gaessler took an unusual path to his first job, choosing to enroll in a six-month coding school at Galvanize, rather than college, when he finished up at Regis Jesuit High School in 2016. Since then, Gaessler landed a software development job at health insurance startup Apostrophe, took part in Techstars Boulder and recently took a job at Zoom Video Communications. He now currently works on Zoom\'s App Marketplace, both on the API and the developer relations side.',
        mediaType: 'image',
        media: 'assets/images/press/tommygaessler-top-15-under-25.jpeg',
        link: 'https://www.americaninno.com/colorado/inno-insights-colorado/the-kids-are-alright-meet-colorados-2019-inno-under-25/',
        author: 'American Inno'
    },
    {
        title: 'Tesla CEO Elon Musk said in July that he anticipated the company would enter "production hell" for the Model 3.',
        date: 'Nov 3, 2017',
        description: 'Tommy Gaessler, a first-day reservation holder, said his timeline was also pushed back by one month. Gaessler ordered a dual-motor all-wheel-drive Model 3, an option that Tesla has said won\'t be produced until Spring 2018. Gaessler now expects to receive the car between September and November 2018 instead of August to October 2018.',
        mediaType: 'image',
        media: 'assets/images/press/tommygaessler-tesla-model3-day-one-reservation-holder.jpeg',
        link: 'https://www.businessinsider.com/tesla-delays-model-3-deliveries-by-at-least-one-month-2017-11',
        author: 'Business Insider'
    },
    {
        title: 'Sports film-editing software wins CU NVC Championship',
        date: 'Apr 7, 2017',
        description: 'Give & Go, an automated film editing platform for sports teams and coaches, took home top honors at the University of Colorado Boulder\'s New Venture Challenge (NVC) Championship on Thursday night, winning first place in the annual event that showcases entrepreneurial innovation from across campus. Give & Go, co-founded by CU Boulder students Mac Bolak, Andrew Casner and Nick Erokhin, allows coaches to edit game film up to 72 times faster than the competition. The project will receive $14,000 in award money as well as $50,000 convertible note from Brad Feld and Dan Caruso, two of Boulder\'s most notable entrepreneurs.',
        mediaType: 'image',
        media: 'assets/images/press/tommygaessler-cu-nvc-winner.webp',
        link: 'https://www.colorado.edu/today/2017/04/07/sports-film-editing-software-adjustable-prosthesis-socket-among-nvc-9-championship',
        author: 'University of Colorado Boulder'
    },
    {
        title: 'Student Spotlight: Tommy Gaessler of Galvanize',
        date: 'Dec 22, 2016',
        description: 'Learn why Tommy decided to take the road less traveled after high school, and see how his current tech education is giving him the tools needed to work as a developer in a startup and run his own company!',
        mediaType: 'image',
        media: 'assets/images/press/tommy-gaessler-galvanize-student-spotlight.png',
        link: 'https://www.coursereport.com/blog/student-spotlight-tommy-gaessler-of-galvanize',
        author: 'Course Report'
    },
    {
        title: 'What takes place at Sports Authority Field during a Broncos bye week? A student hack-athon.',
        date: 'Nov 20, 2016',
        description: 'Tommy Gaessler 19 years old (L) and Chris Ireland 18 years old with Galvanized, finish up on a presentation November 20, 2016 as teams of college students finish up their projects after camping out and hacking technology for 36 hours as part of the Denver Broncos Tackle STEM program. The hackathon is being co-produced by Denver-area tech companies SendGrid and FullContact. Teams presented their hacking to a panel of judges including Broncos tackle Russell Okung at Sports Authority at Mile High.',
        mediaType: 'image',
        media: 'assets/images/press/tommygaessler-broncos-hackathon.webp',
        link: 'https://www.denverpost.com/2016/11/20/stem-colorado-all-stars-hackathon-denver-broncos-mile-high-stadium/',
        author: 'The Denver Post'
    },
    {
        title: 'Fox 31 News Interview of Tommy Gaessler at the Broncos Hackathon',
        date: 'Nov 19, 2016',
        description: 'Tommy Gaessler being interviewed by Fox 31 News at the Denver Broncos Hackathon sponsored by SendGrid and FullContact.',
        mediaType: 'video',
        media: 'Pj2WwpAoNVg',
        link: 'https://www.youtube.com/watch?v=Pj2WwpAoNVg',
        author: 'Fox 31 News'
    },
    {
        title: 'Why One High School Senior Bypassed College to Learn to Code',
        date: 'Oct 26, 2016',
        description: '“It was six months long, a fraction of the cost of college and totally focused on preparing you for and helping you find a job,” recalls Gaessler',
        mediaType: 'image',
        media: 'assets/images/press/tommy-gaessler-gt-galvanize.jpeg',
        link: 'https://web.archive.org/web/20170428072625/https://www.galvanize.com/blog/why-one-high-school-senior-bypassed-college-to-learn-to-code/',
        author: 'Galvanize'
    },
    {
        title: 'Senior Tommy Gaessler Chooses Coding Over College',
        date: 'Apr 20, 2016',
        description: 'Regis Jesuit senior Tommy Gaessler decides not to go to college. Instead he will be partaking in a 6th month program to learn how to code.',
        mediaType: 'video',
        media: 'OPxutprNQ5M',
        link: 'https://www.youtube.com/watch?v=OPxutprNQ5M&feature=youtu.be',
        author: 'RJ Media'
    }
];
//# sourceMappingURL=press.js.map

/***/ }),

/***/ "../../../../../src/assets/projects/projects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projects; });
var projects = {
    trip_charge: {
        name: 'TripCharge',
        image: 'assets/images/projects/tripcharge.png',
        description: 'Find electric car chargers!',
        languages: 'Swift / GO',
        deployed: 'https://apps.apple.com/us/app/tripcharge/id1186368321',
        github: 'https://github.com/tommygaessler/tripcharge',
        type: 'app'
    },
    webview: {
        name: 'WebView - Tester',
        image: 'assets/images/projects/webview.png',
        description: 'Test your webpage in a WebView.',
        languages: 'Swift',
        deployed: 'https://apps.apple.com/us/app/webview-tester/id1661004679',
        github: 'https://github.com/tommygaessler/webview',
        type: 'app'
    }
};
//# sourceMappingURL=projects.js.map

/***/ }),

/***/ "../../../../../src/assets/projects/retired-projects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retiredProjects; });
var retiredProjects = {
    sitekite: {
        name: 'SiteKite',
        image: 'assets/images/projects/sitekite.png',
        description: 'A full-stack app using GitHub OAuth that builds portfolio websites for developers to showcase who they are, and what they’ve built.',
        languages: 'Node.js / Express / Nunjucks / PostgreSQL / HTML / CSS',
        deployed: 'https://site-kite.herokuapp.com',
        github: 'https://github.com/tommygaessler/sitekite',
        type: 'web'
    },
    fundsplash: {
        name: 'Fundsplash',
        image: 'assets/images/projects/fundsplash.png',
        description: 'A crowd funding app for <a href="https://unsplash.com/" target="_blank">Unsplash</a> photographers!',
        languages: 'php / JavaScript / jQuery / HTML / Sass',
        deployed: 'https://fundsplash.herokuapp.com',
        github: 'https://github.com/tommygaessler/fundsplash',
        type: 'web'
    },
    kamstrafam: {
        name: 'KamstraFam',
        image: 'assets/images/projects/kamstrafam.png',
        description: 'A custom WordPress site/blog I built for a client’s mission trip to Prague, Czech Republic.',
        languages: 'php / SQL / jQuery / HTML / Sass',
        deployed: 'http://kamstrafam.com',
        github: 'https://github.com/tommygaessler/kamstrafam',
        type: 'web'
    },
    senior_capstone: {
        name: 'Senior Capstone',
        image: 'assets/images/projects/seniorcapstone.png',
        description: 'Senior capstone project reflecting my life at Regis Jesuit High School.',
        languages: 'php / jQuery / HTML / Sass',
        deployed: 'http://capstone.tommygaessler.com',
        github: 'https://github.com/tommygaessler/regis-jesuit-senior-capstone',
        type: 'web'
    },
    melody_quilts: {
        name: 'Melody Quilts',
        image: 'assets/images/projects/melodyquilts.png',
        description: 'An art portfolio website I built for a client!',
        languages: 'JavaScript / jQuery / HTML / CSS',
        deployed: 'http://melodyquilts.com',
        github: 'https://github.com/tommygaessler/melodyquilts',
        type: 'web'
    },
    most_liked: {
        name: 'Most Liked',
        image: 'assets/images/projects/mostliked.png',
        description: 'Displays your most liked post on Instagram.',
        languages: 'jQuery / HTML / CSS',
        deployed: 'https://tommygaessler.com/mostliked',
        github: 'https://github.com/tommygaessler/mostliked',
        type: 'web'
    },
    kids247: {
        name: 'Kids247',
        image: 'assets/images/projects/kids247.png',
        description: 'A custom WordPress website/blog I built for a clients non-profit that helps kids and families in times of divorce!',
        languages: 'php / SQL / jQuery / HTML / Sass',
        deployed: 'https://kids247.org',
        github: 'https://github.com/tommygaessler/kids247',
        type: 'web'
    },
    habi_pets: {
        name: 'Habi Pets',
        video: 'N0V59FX3tb0',
        description: 'A landing page and video I made for a company in the Telluride Venture Accelerator!',
        languages: 'HTML / CSS',
        deployed: 'https://tommygaessler.com/habipets',
        github: 'https://github.com/tommygaessler/habipets',
        type: 'web/video'
    },
    pfw: {
        name: 'PFW',
        image: 'assets/images/projects/pfw.png',
        description: 'A website I built for a clients non-profit that helps families prepare for when loved ones pass away!',
        languages: 'HTML / CSS',
        deployed: 'https://preparingtofinishwell.org',
        github: 'https://github.com/tommygaessler/preparingtofinishwell',
        type: 'web'
    },
    used_calculators: {
        name: 'Used Calculators',
        image: 'assets/images/projects/usedcalculators.png',
        description: 'A Christmas themed e-commerce website I made to sell calculators!',
        languages: 'HTML / CSS',
        deployed: 'https://tommygaessler.com/usedcalculators',
        github: 'https://github.com/tommygaessler/usedcalculators',
        type: 'web'
    },
    suit_up_denver: {
        name: 'Suit Up Denver',
        video: 'nHNMkOq5xSQ',
        description: 'A website I built for a clients non-profit that donates suits to people in need of professional business attire!',
        languages: 'HTML / CSS',
        deployed: 'https://tommygaessler.com/suitupdenver',
        github: 'https://github.com/tommygaessler/suitupdenver',
        type: 'web/video'
    }
};
//# sourceMappingURL=retired-projects.js.map

/***/ }),

/***/ "../../../../../src/assets/talks/talks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return talks; });
var talks = [
    {
        title: '',
        description: '',
        mediaType: 'image',
        media: 'assets/images/talks/',
        link: '',
        host: 'Mend'
    }
];
//# sourceMappingURL=talks.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map