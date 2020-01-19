import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';
  count = 0;
  // index = 123;
  list = [1, 2, 3, 4, 5, 6];
  jsonList = [{
    name: 'abc'
  },
  {
    name: '123'
  },
  {
    name: 'efg'
  },
  {
    name: 'sqrt'
  }];
  increase() {
    this.count = this.count + 1;
    console.log('count : ', this.count);

  }
}
