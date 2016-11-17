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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  RouterModule.forRoot([
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home',  component: AppComponent },
  { path: 'schools',  component: SchoolsComponent },
  { path: 'parenting',  component: ParentingComponent },
  { path: 'books',  component: BooksComponent },
  { path: 'songs',  component: SongsComponent },
  { path: 'activities',  component: ActivitiesComponent },
  { path: 'toys',  component: ToysComponent },
  { path: 'safety',  component: SafetyComponent },
  ]),

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})


export class AppModule { }
