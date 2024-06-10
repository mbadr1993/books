import { environment } from '../environments/environment';

export const APIConfig = {
  getBooksBySubject: {
    url: (subject: string) =>
      `${environment.apiUrl}/subjects/${subject}.json?limit=9`,
  },
  getBookDeatails: {
    url: (bookID: string) => `${environment.apiUrl}/works/${bookID}.json`,
  },
};
