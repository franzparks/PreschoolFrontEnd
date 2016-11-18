import { Injectable } from '@angular/core';

import {Book} from './book';
import { BOOKS } from './books/mock-books';

@Injectable()
export class BookService {

  books : Book[] = BOOKS;

  constructor() { }

  getBooks() : Promise<Book[]> {
  	return Promise.resolve(this.books);
  }

}
