System.register(["angular2/core", "angular2/router", "./home/home.component.ts", "./standard/standard.component.ts", "./subject/subject.component.ts", "./result/result.component.ts"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, home_component_ts_1, standard_component_ts_1, subject_component_ts_1, result_component_ts_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_ts_1_1) {
                home_component_ts_1 = home_component_ts_1_1;
            },
            function (standard_component_ts_1_1) {
                standard_component_ts_1 = standard_component_ts_1_1;
            },
            function (subject_component_ts_1_1) {
                subject_component_ts_1 = subject_component_ts_1_1;
            },
            function (result_component_ts_1_1) {
                result_component_ts_1 = result_component_ts_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n    <div class=\"app\">\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Student Data Manager</a>\n          </div>\n\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li>\n                <a [routerLink]=\" ['Home'] \">Home</a>\n              </li>\n               <li>\n                <a [routerLink]=\" ['Standard'] \">Standard</a>\n              </li>\n              <li>\n                <a [routerLink]=\" ['Subject'] \">Subject</a>\n              </li>\n              <li>\n                <a [routerLink]=\" ['Result'] \">Result</a>\n              </li>\n            </ul>\n          </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n      </nav>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <main>\n              <router-outlet></router-outlet>\n            </main>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    directives: [router_1.ROUTER_DIRECTIVES]
                }),
                router_1.RouteConfig([
                    { path: '/', name: 'Home', component: home_component_ts_1.Home, useAsDefault: true },
                    { path: '/standard', name: 'Standard', component: standard_component_ts_1.Standard },
                    { path: '/subject', name: 'Subject', component: subject_component_ts_1.Subject },
                    { path: '/result', name: 'Result', component: result_component_ts_1.Result }
                ]),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map