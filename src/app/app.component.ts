import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <h1 myHidden > Hidden Welcome </h1>`,
})
export class AppComponent  { name = 'Angular'; }
