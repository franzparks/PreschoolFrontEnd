import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { BookService } from '../book.service';

import {Book} from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

	@Input() book: Book;

	constructor() { }

	ngOnInit() {
	}

}
