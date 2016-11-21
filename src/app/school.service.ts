import { Injectable } from '@angular/core';
import  {School} from './school';


@Injectable()
export class SchoolService {

  constructor() { }

  getSchool(id: number): Promise<School> {
  	return this.getSchools()
  				.then(schools => schools.find(school => school.id === id));
  }

}
