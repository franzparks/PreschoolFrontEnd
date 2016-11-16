import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item-component',
  templateUrl: './nav-item-component.component.html',
  styleUrls: ['./nav-item-component.component.css', '../app.component.css']
})
export class NavItemComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navTitle : string = 'Label';
  navSubTitle : string = 'nav-title';
  navLinksCol1 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
  navLinksCol2 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
  navLinksCol3 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
}
