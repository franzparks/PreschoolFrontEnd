import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css', '../app.component.css']
})
export class BooksComponent implements OnInit {

	books : Book[] = [];

	constructor(private bookService : BookService) { }

	ngOnInit() {
		//this.bookService.getBooks().then(books => this.books = books);//books.slice(0, 7));
		//this.bookService.getBooksList();
		//this.bookService.getBooksList().map(books => this.books = books);//books.slice(0, 7));
		//this.bookService.getBooks().map( book =>
		//	console.log(book)
			//this.books.concat(book)
			//console.log(book)
		//);

		this.bookService.getBooksList().subscribe(
			res => {
        		this.books = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        		//console.log(JSON.parse(JSON.stringify(res.json())));
        		console.log(JSON.parse(JSON.stringify(res)));
        		//this.books = res.json().data;
        		//console.log(JSON.parse(JSON.stringify(res.json().data)));
      		},
      		error => console.log(error)
		)
	}

}
