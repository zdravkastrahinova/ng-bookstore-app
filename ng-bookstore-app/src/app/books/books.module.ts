import { NgModule } from '@angular/core';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksComponent } from './components/books/books.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: BooksComponent,
    children: [
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
        redirectTo: 'books'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BooksListComponent,
    BookItemComponent,
    BookFormComponent,
    BooksComponent
  ]
})
export class BooksModule {
}
