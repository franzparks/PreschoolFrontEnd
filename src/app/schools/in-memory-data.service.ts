import {InMemoryDbService } from 'angular-in-memory-web-api';
import {BOOKS } from '../books/mock-books'

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let schools = [
			{
				id: 1,
				name : 'Harker'
			},
			{
				id: 2,
				name : 'Challenger'
			},
			{
				id: 3,
				name : 'South Bay'
			},
			{
				id: 4,
				name : 'Montessori'
			},
			{
				id: 5,
				name : 'Nursery'
			},
		];
		let books = BOOKS;
		return {schools, books};
	}
}
