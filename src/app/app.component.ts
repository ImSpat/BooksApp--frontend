import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { HttpErrorResponse } from '@angular/common/http';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'booksappv2';

  public books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getAllBooks().subscribe({
      next: (response: Book[]) => {
        this.books = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
}
