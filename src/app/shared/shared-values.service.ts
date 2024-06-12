import { Injectable } from '@angular/core';
import { Book } from './interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class SharedValuesService {
  allBooks: Book[] = [];
  constructor() {}
}
