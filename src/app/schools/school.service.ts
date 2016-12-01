import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import  {School} from './school';
import {SCHOOLS} from './mock-schools';

//const SCHOOLS = []; //placeholder

@Injectable()
export class SchoolService {

	schools : School[] = SCHOOLS;

	private schoolsUrl = 'app/schools'; //URL to web api

	constructor(private http: Http) { }

	getSchools() : Promise<School[]> {
		return Promise.resolve(this.schools);
	}


	getSchool(id: number): Promise<School> {
	  	return this.getSchools()
	  				.then(schools => schools.find(school => school.id === id));
	}

}
