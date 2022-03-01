import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'Tour of Heroes';



  getValueFromSon(value: any) {
    console.log('getValueFromSon', value);
  }
}


