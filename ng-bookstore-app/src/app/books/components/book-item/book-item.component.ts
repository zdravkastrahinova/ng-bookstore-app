import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: Book;

  @Output() deleteClicked = new EventEmitter<number>();

  onDelete(): void {
    this.deleteClicked.emit(this.book.id);
  }
}
