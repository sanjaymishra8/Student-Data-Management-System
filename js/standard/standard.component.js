System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, Standard;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Standard = (function () {
                function Standard() {
                }
                return Standard;
            }());
            Standard = __decorate([
                core_1.Component({
                    selector: 'home',
                    template: "\n  \t<div class=\"panel panel-default\">\n\t\t\t<!-- Default panel contents -->\n\t\t\t<div class=\"panel-heading\">Class wise students info</div>\n\t\t\t<!-- Table -->\n\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>9th</th>\n\t\t\t\t\t<th>10th</th>\n\t\t\t\t\t<th>11th</th>\n\t\t\t\t\t<th>12th</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>xxxx</td>\n\t\t\t\t\t<td>xxxx</td>\n\t\t\t\t\t<td>xxxx</td>\n\t\t\t\t\t<td>xxxx</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], Standard);
            exports_1("Standard", Standard);
        }
    };
});
//# sourceMappingURL=standard.component.js.map