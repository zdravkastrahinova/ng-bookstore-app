import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component';
import { Route, RouterModule } from '@angular/router';
import { BookItemComponent } from './book-item/book-item.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Route[] = [
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'books/edit',
    component: BookFormComponent
  },
  {
    path: 'books/edit/:id',
    component: BookFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BooksListComponent,
    BookItemComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
