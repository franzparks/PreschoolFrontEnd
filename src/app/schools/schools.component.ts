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
	items: any[] = [];

	constructor(private schoolService : SchoolService) { }

	ngOnInit() {
		//this.schoolService.getSchools().then(schools => this.schools = schools);
		//this.schoolService.getItems().then(items => this.items = items);
		this.schoolService.getSchoolList().subscribe(
			res => {
        		this.schools = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        		//console.log(JSON.parse(JSON.stringify(res)));	
      		},
      		error => console.log(error)
		)
	}

}
