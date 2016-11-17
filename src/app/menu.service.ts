import { Injectable } from '@angular/core';
import { NavItem } from './nav-item';
import { NAVITEMS } from './nav-menu-items';


@Injectable()
export class MenuService {
  

  constructor() { }

  getNavItems()  {
  	return NAVITEMS;
  }

}
