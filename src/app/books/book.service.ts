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
	private templUrl = 'http://localhost:8080/api/schools/all';  

	constructor(private http: Http) { }

	getBooks() : Promise<Book[]> {
	  	//return Promise.resolve(this.books);
	  	return this.http.get(this.booksUrl)
               .toPromise()
               .then(response => response.json().data as Book[]) //response.json().data as Book[]
               .catch(this.handleError);
	}

	getBooks1() : Observable<Book[]> {
        // ...using get request
        return this.http.get(this.booksUrl)
            // ...and calling .json() on the response to return data
             .map((res:Response) => res.json())
             //...errors if any
             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

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
