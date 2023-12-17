import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.apiServerUrl}/book/find/all`);
  }

  public getBookById(bookId: number): Observable<Book> {
      return this.http.get<Book>(`${this.apiServerUrl}/book/find/${bookId}`);
  }

  public addBook(book: Book): Observable<Book> {
      return this.http.post<Book>(`${this.apiServerUrl}/book/add`, book);
  }

  public updateBook(book: Book): Observable<Book> {
      return this.http.put<Book>(`${this.apiServerUrl}/book/update`, book);
  }

  public deleteBook(bookId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/book/delete/${bookId}`);
  }
}
