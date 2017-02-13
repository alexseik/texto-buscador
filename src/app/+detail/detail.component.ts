import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <router-outlet></router-outlet>
    <md-tab-group>
      <md-tab label="One">
        <h1>Some tab content</h1>
        <p>...</p>
      </md-tab>
      <md-tab label="Two">
        <h1>Some more tab content</h1>
        <button md-raised-button color="primary" (click)="onSubmit()">Submit Value</button>
      </md-tab>
    </md-tab-group>
  `
})
export class DetailComponent {
  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

  onSubmit() {
    this.router.navigate(['detail/other']);
  }
}
