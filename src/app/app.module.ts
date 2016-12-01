import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './schools/in-memory-data.service';
import { InMemoryService }  from './schools/in-memory-data.service';

import { AppComponent } from './app.component';
import { MenuService } from './menu.service';
import { SchoolsComponent } from './schools/schools.component';
import { ParentingComponent } from './parenting/parenting.component';
import { BooksComponent } from './books/books.component';
import { SongsComponent } from './songs/songs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ToysComponent } from './toys/toys.component';
import { SafetyComponent } from './safety/safety.component';
import { BookService } from './book.service';
import { SchoolService } from './schools/school.service';
import { RecipeComponent } from './recipes/recipes.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule }     from './app-routing.module';

import {DropdownModule} from "ng2-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    ParentingComponent,
    BooksComponent,
    SongsComponent,
    ActivitiesComponent,
    ToysComponent,
    SafetyComponent,
    RecipeComponent,
    SchoolDetailComponent,
    BookDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DropdownModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    InMemoryWebApiModule.forRoot(InMemoryService),

  ],
  providers: [MenuService, BookService, SchoolService],
  bootstrap: [AppComponent]
})


export class AppModule { }
