import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home/home.component.ts';
import {Standard} from './standard/standard.component.ts';
import {Subject} from './subject/subject.component.ts';
import {Result} from './result/result.component.ts';


@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Student Data Manager</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <a [routerLink]=" ['Home'] ">Home</a>
              </li>
               <li>
                <a [routerLink]=" ['Standard'] ">Standard</a>
              </li>
              <li>
                <a [routerLink]=" ['Subject'] ">Subject</a>
              </li>
              <li>
                <a [routerLink]=" ['Result'] ">Result</a>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <main>
              <router-outlet></router-outlet>
            </main>
          </div>
        </div>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/standard', name: 'Standard', component: Standard },
  { path: '/subject', name: 'Subject', component: Subject },
  { path: '/result', name: 'Result', component: Result }
])
export class AppComponent {
  
}