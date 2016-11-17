import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

	books : Book[] = [];

	constructor(private bookService : BookService) { }

	ngOnInit() {
		this.bookService.getBooks().then(books => this.books = books.slice(1, 5));
	}

}
