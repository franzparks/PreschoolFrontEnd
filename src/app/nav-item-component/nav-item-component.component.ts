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
  //navTitle : string = 'Main Title';
  //navSubTitle : string = 'Sub Title';
  //navLinksCol1 : any[] = [{ref:'url', label:'Link1'}, {ref:'url', label:'Link2'}, {ref:'url', label:'Link3'}];
  //navLinksCol2 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
  //navLinksCol3 : any[] = [{ref:'', label:''}, {ref:'', label:''}, {ref:'', label:''}];
}
