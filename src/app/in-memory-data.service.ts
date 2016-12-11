import {InMemoryDbService } from 'angular-in-memory-web-api';
import {BOOKS } from './books/mock-books'
import {SCHOOLS} from './schools/mock-schools';
import  {ITEMS} from './schools/mock-service-response';


export class InMemoryDataService implements InMemoryDbService {
	createDb() {
			let schools = SCHOOLS;
			let books = BOOKS;
			let items = ITEMS;
		return {schools, books,items};
	}
}
