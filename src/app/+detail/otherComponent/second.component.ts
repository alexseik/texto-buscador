import { Component } from '@angular/core';


@Component({
  selector: 'other',
  template: `
    <h1>Hello from Other</h1>
  `
})
export class SecondComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Second` component');
  }

}
