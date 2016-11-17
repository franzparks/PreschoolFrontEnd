import { Injectable } from '@angular/core';
import { NavItem } from './nav-item';

const NAVITEMS : NavItem[] = [

	{
		id: 1,
		navTitle : 'Main Title1',
		navSubTitle  : 'Sub Title1',
		navLinksCol1  : [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}],
		//navLinksCol2 : [{ref:'url', label:'Link4'}, {ref:'url', label:'Link5'}, {ref:'url', label:'Link5'}],
        //navLinksCol3 :[{ref:'url', label:'Link7'}, {ref:'url', label:'Link8'}, {ref:'url', label:'Link9'}]

	},
	{	
		id: 2,
		navTitle  : 'Main Title2',
		navSubTitle  : 'Sub Title2',
		navLinksCol1  : [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}],
		navLinksCol2 : [{ref:'url', label:'Link4'}, {ref:'url', label:'Link5'}, {ref:'url', label:'Link5'}],
        navLinksCol3 : [{ref:'url', label:'Link7'}, {ref:'url', label:'Link8'}, {ref:'url', label:'Link9'}]

	},
	{
		id: 6,
		navTitle  : 'Main Title3',
		navSubTitle  : 'Sub Title3',
		navLinksCol1  : [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}],
		//navLinksCol2 : [{ref:'url', label:'Link4'}, {ref:'url', label:'Link5'}, {ref:'url', label:'Link5'}],
        //navLinksCol3 : [{ref:'url', label:'Link7'}, {ref:'url', label:'Link8'}, {ref:'url', label:'Link9'}]

	}
];

@Injectable()
export class MenuService {
  
  //navItems : NavItem[] = [];
  constructor() { }

  getNavItems() : NavItem[] {
  	return NAVITEMS;
  }

}
