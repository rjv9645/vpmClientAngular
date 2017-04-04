import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `	
  <nav class="navbar navbar-inverse navbar-fixed-top">
		<a class="navbar-brand" href="#">VPM Home</a>
    <a class="navbar-brand" routerLink="/maintenance">Maintenance</a>
	</nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
