export interface Book {
  key: string;
  title: string;
  year: Date;
  authors: any[];
  imageUrl: string;
  editionCount?: number;
  numberOfPages?: number;
}
