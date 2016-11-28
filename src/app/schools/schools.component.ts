import { Component, OnInit } from '@angular/core';
import { School } from './school';
import {SchoolService } from './school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

	schools: School[] = [];

	constructor(private schoolService : SchoolService) { }

	ngOnInit() {
	}

}
