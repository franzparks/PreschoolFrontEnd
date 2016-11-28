import { Component, OnInit } from '@angular/core';
import { School } from '../school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
	schools: School[] = [];

	constructor() { }

	ngOnInit() {
	}

}
