import {InMemoryDbService } from 'angular-in-memory-web-api';
import {BOOKS } from '../books/mock-books'
import {SCHOOLS} from './mock-schools';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
			let schools = SCHOOLS;
			let books = BOOKS;
		return {schools, books};
	}
}
