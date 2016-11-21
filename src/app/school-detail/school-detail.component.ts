import { Component, OnInit, Input } from '@angular/core';
import {School} from '../school';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

	@Input() school: School;	

	constructor() { }

	ngOnInit() {

	}

}
