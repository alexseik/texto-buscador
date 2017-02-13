import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { DetailComponent } from './detail.component';
import { SecondComponent } from './otherComponent/second.component';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: DetailComponent },
  { path: 'other',  component: SecondComponent }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot()
  ]
})
export default class DetailModule {
  static routes = routes;
}
