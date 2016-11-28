import { Injectable } from '@angular/core';
import  {School} from './school';

const SCHOOLS = []; //placeholder

@Injectable()
export class SchoolService {

	schools : School[] = SCHOOLS;
	  
	constructor() { }

	getSchools() : Promise<School[]> {
		return Promise.resolve(this.schools);
	}


	getSchool(id: number): Promise<School> {
	  	return this.getSchools()
	  				.then(schools => schools.find(school => school.id === id));
	}

}
