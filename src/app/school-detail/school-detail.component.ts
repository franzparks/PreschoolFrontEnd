import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { SchoolService } from '../school.service';

import {School} from '../school';


@Component({
	moduleId: module.id,
  	selector: 'school-detail',
  	templateUrl: './school-detail.component.html',
  	styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

	@Input() school: School;	

	constructor(
		private schoolService : SchoolService,
		private route : ActivatedRoute,
		private location: Location

	) { }

	ngOnInit() {
		this.route.params
		.switchMap((params: Params) => this.schoolService.getSchool(+params['id']))
		.subscribe(school => this.school = school);

	}

	goBack(): void {
 		this.location.back();
	}


}
