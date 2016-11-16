import { Component } from '@angular/core';
import { NavItem } from './nav-item';

const NAVITEMS : NavItem[] = [

	{
		navTitle : 'Main Title1',
		navSubTitle  : 'Sub Title1',
		navLinksCol1  : [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}],
		navLinksCol2 : [{ref:'url', label:'Link4'}, {ref:'url', label:'Link5'}, {ref:'url', label:'Link5'}],
        navLinksCol3 :[{ref:'url', label:'Link7'}, {ref:'url', label:'Link8'}, {ref:'url', label:'Link9'}]

	},
	{
		navTitle  : 'Main Title2',
		navSubTitle  : 'Sub Title2',
		navLinksCol1  : [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}],
		navLinksCol2 : [{ref:'url', label:'Link4'}, {ref:'url', label:'Link5'}, {ref:'url', label:'Link5'}],
        navLinksCol3 : [{ref:'url', label:'Link7'}, {ref:'url', label:'Link8'}, {ref:'url', label:'Link9'}]

	}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {

  title = 'Welcome To Preschool Rater';
  navItems : NavItem[] = [];

  constructor(){
    this.navItems = NAVITEMS;
  }

  //navStyle = (this.navLinksCol2 !== [] ? 'b-dropdown-grid-container b-dropdown-grid-container-three-column' : //'b-dropdown-grid-container ' );

  
}
