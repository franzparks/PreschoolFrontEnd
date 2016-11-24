import { Component } from '@angular/core';

import { NavItem } from './nav-item';
import { MenuService } from './menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',String('../styles.css')],

})

export class AppComponent {

  title = 'Welcome To Golden Five';
  menuStyleLeft = 'dropdown-menu menu dropdown-menu-left';
  menuStyleRight = 'dropdown-menu menu dropdown-menu-right';
  navStyleOneCol = 'b-dropdown-grid-container';
  navStyleTwoCol = 'b-dropdown-grid-container b-dropdown-grid-container-two-column';
  navStyleThreeCol = 'b-dropdown-grid-container b-dropdown-grid-container-three-column';
  navItems : NavItem[] = [];

  constructor( private menuService : MenuService){
    this.navItems = this.menuService.getNavItems();
  }

  
}
