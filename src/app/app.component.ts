import { Component } from '@angular/core';
//import {NavItemComponentComponent} from './nav-item-component/nav-item-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  title = 'Welcome To Preschool Rater';
  navTitle : string;
  navSubTitle : string;
  navLinksCol1 : any[];
  navLinksCol2 : any[];
  navLinksCol3 : any[];

  constructor(){
    this.navTitle = '';
    this.navSubTitle = '';
  	this.navLinksCol1 = [];
  	this.navLinksCol2 = [];
  	this.navLinksCol3 = [];
  }

  navStyle = (this.navLinksCol2 !== [] ? 'b-dropdown-grid-container b-dropdown-grid-container-three-column' : 'b-dropdown-grid-container ' );
  //this.navTitle  = 'Main Title';
  //this.navSubTitle  = 'Sub Title';
  //this.navLinksCol1  = [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}];
  //this.navLinksCol2 = [{ref:'url', label:'Link4'}, {ref:'url', label:'Link5'}, {ref:'url', label:'Link5'}];
  //this.navLinksCol3 = [{ref:'url', label:'Link7'}, {ref:'url', label:'Link8'}, {ref:'url', label:'Link9'}];
}
