import { Component } from '@angular/core';

import { NavItem } from './nav-item';
import { MenuService } from './menu.service';

import {DropdownModule} from "ng2-dropdown";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',String('../styles.css')],

})

export class AppComponent {

  title = 'Golden Five';
  menuStyleLeft = 'dropdown-menu menu dropdown-menu-left';
  menuStyleRight = 'dropdown-menu menu dropdown-menu-right';
  navStyleOneCol = 'dropdown-grid-container';
  navStyleTwoCol = 'dropdown-grid-container dropdown-grid-container-two-column';
  navStyleThreeCol = 'dropdown-grid-container dropdown-grid-container-three-column';
  navVisible = 'nav2';
  navInvincible = 'nav2 invincible';
  navItems : NavItem[] = [];
  visible : boolean = false; 
  
  
  constructor( private menuService : MenuService){
    this.navItems = this.menuService.getNavItems();
  }

  toggleNav(){
     this.visible = !this.visible;
     console.log("am clicked "+ this.visible);
  }

  
}
