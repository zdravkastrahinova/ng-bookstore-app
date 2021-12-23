import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getBooks$().subscribe({
      next: (response: Book[]) => {
        this.books = response;
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
      }
    });
  }

  onDelete(id: number): void {
    this.booksService.deleteBook$(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.id !== id);
      }
    });
  }
}
