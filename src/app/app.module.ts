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

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    ParentingComponent,
    BooksComponent,
    SongsComponent,
    ActivitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  RouterModule.forRoot([
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home',  component: AppComponent },
  { path: 'schools',  component: SchoolsComponent },
  ]),

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})


export class AppModule { }
