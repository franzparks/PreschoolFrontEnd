import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item-component',
  templateUrl: './nav-item-component.component.html',
  styleUrls: ['./nav-item-component.component.css']
})
export class NavItemComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navLabel = 'Label';
  subTitle = 'Nav Title';
  navLinks = ['Link1', 'Link2', 'Link3'];
}
