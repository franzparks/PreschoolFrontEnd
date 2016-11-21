import { NgModule }             from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';

//import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';
import { ParentingComponent } from './parenting/parenting.component';
import { BooksComponent } from './books/books.component';
import { SongsComponent } from './songs/songs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ToysComponent } from './toys/toys.component';
import { SafetyComponent } from './safety/safety.component';
import { RecipeComponent } from './recipes/recipes.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
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

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}