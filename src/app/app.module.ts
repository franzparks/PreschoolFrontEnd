import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavItemComponentComponent } from './nav-item-component/nav-item-component.component';
import { MenuService } from './menu-service';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  RouterModule.forRoot([
    {
      path: 'home',
      component: AppComponent
    }
  ]),

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})


export class AppModule { }
