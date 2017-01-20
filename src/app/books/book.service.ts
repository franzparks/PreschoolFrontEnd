import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Book} from './book';
//import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

	//books : Book[] = BOOKS;

	private booksUrl = 'app/api';//'app/books';

	constructor(private http: Http) { }

	getBooks() : Promise<Book[]> {
	  	//return Promise.resolve(this.books);
	  	return this.http.get(this.booksUrl)
               .toPromise()
               .then(response => response.json().data as Book[])
               .catch(this.handleError);
	}

	getBook(id: number): Promise<Book> {
	  	return this.getBooks()
	  				.then(books => books.find(book => book.id === id));
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}


}
