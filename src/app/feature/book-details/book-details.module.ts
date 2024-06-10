import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetialsRoutingModule } from './book-details-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, BookDetialsRoutingModule, HttpClientModule],
})
export class BookDetailsModule {}
