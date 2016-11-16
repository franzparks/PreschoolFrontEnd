import { Component } from '@angular/core';
//import {NavItemComponentComponent} from './nav-item-component/nav-item-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Welcome To Preschool Rater';

  navTitle : string = 'Main Title';
  navSubTitle : string = 'Sub Title';
  navLinksCol1 : any[] = [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}];
  //navLinksCol2 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
  //navLinksCol3 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
}
