import { Injectable } from '@angular/core';

import {Book} from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

	books : Book[] = BOOKS;

	constructor() { }

	getBooks() : Promise<Book[]> {
	  	return Promise.resolve(this.books);
	}

	getBook(id: number): Promise<Book> {
	  	return this.getBooks()
	  				.then(books => books.find(book => book.id === id));
	}

}
