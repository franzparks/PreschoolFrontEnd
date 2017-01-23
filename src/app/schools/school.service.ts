import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import  {School} from './school';


@Injectable()
export class SchoolService {

	private schoolsUrl = 'http://localhost:8080/api/schoolList';//'app/schools'; //URL to web api

	constructor(private http: Http) { }

	getSchools() : Promise<School[]> {
		//return Promise.resolve(this.schools);
		return this.http.get(this.schoolsUrl)
            .toPromise()
            .then(response => response.json().data as School[])
            .catch(this.handleError);
	}

	getSchoolList() {
    	let url = "http://localhost:8080/api/schoolList";
    	return this.http.get(this.schoolsUrl, { withCredentials: true });
  	}

	getItems() : Promise<any[]> {
		
		return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data as any[])
            .catch(this.handleError);
	}



	getSchool(id: number): Promise<School> {
	  	return this.getSchools()
	  		.then(schools => schools.find(school => school.id === id));
	}

	private handleError(error: any): Promise<any> {
  			console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

}
