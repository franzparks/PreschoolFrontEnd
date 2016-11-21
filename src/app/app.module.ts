import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

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
import { SchoolService } from './school.service';
import { RecipeComponent } from './recipes/recipes.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

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

  RouterModule.forRoot([
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'schools',  component: SchoolsComponent },
  {path: 'detail/:id', component: SchoolDetailComponent},
  { path: 'parenting',  component: ParentingComponent },
  { path: 'books',  component: BooksComponent },
  {path: 'book/:id', component: BookDetailComponent},
  { path: 'songs',  component: SongsComponent },
  { path: 'activities',  component: ActivitiesComponent },
  { path: 'toys',  component: ToysComponent },
  { path: 'safety',  component: SafetyComponent },
  ]),

  ],
  providers: [MenuService, BookService, SchoolService],
  bootstrap: [AppComponent]
})


export class AppModule { }
