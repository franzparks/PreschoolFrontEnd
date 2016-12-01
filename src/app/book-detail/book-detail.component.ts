import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { BookService } from '../books/book.service';

import {Book} from '../books/book';

@Component({
	moduleId: "bookDetail",
	selector: 'book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

	@Input() book: Book;

	constructor(
		private bookService : BookService,
		private route : ActivatedRoute,
		private location: Location
	) { }

	ngOnInit() {
		this.route.params
		.switchMap((params: Params) => this.bookService.getBook(+params['id']))
		.subscribe(book => this.book = book);
	}

	goBack(): void {
  		this.location.back();
	}


}
