import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import {Book} from './book';
//import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

	//books : Book[] = BOOKS;

	private booksUrl = 'app/books';
	
	constructor(private http: Http) { }

	getBooks() : Promise<Book[]> {
	  	//return Promise.resolve(this.books);
	  	return this.http.get(this.booksUrl)
               .toPromise()
               .then(response => response.json().data as Book[]) //response.json().data as Book[]
               .catch(this.handleError);
	}

	getBooksList() {
    	//let url = "http://localhost:8080/api/bookList";
    	//return this.http.get(url, { withCredentials: true });
  	}


	getBook(id: number): Promise<Book> {
		return  Promise.resolve(this.getBooks()[0]);
	  	//return this.getBooks()
	  				//.then(books => books.find(book => book.id === id));
	  				//.map(books => books.find(book => book.id === id));
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}


}
