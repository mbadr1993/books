import { environment } from '../environments/environment';

export const APIConfig = {
  getBooksBySubject: {
    url: (subject: string) =>
      `${environment.apiUrl}/subjects/${subject}.json?limit=9`,
  },
  getBookDeatails: {
    url: (bookID: string) => `${environment.apiUrl}/works/${bookID}.json`,
  },
  getBookbagesNumber: {
    url: (bookID: string) => `${environment.apiUrl}/books/${bookID}.json`,
  },
  getAuthorDeatails: {
    url: (authorID: string) => `${environment.apiUrl}/authors/${authorID}.json`,
  },
  getAuthorDeatailsRestDetails: {
    url: (query: string, type?: string) =>
      `${environment.apiUrl}/search${type ? '/' + type : null}.json?q=${query}`,
  },
  search: {
    url: (query: string, type?: string) =>
      `${environment.apiUrl}/search.json?${type ? +type : 'q'}=${query}`,
  },
};
