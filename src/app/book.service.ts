import { Injectable } from '@angular/core';

import {Book} from './book';

@Injectable()
export class BookService {

  books : Book[] = [];

  constructor() { }

  getBooks() : Promise<Book[]> {
  	return Promise.resolve(this.books);
  }

}
