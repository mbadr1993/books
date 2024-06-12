import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorService } from './author.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../shared/interfaces/author';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss',
})
export class AuthorComponent {
  author: Author;

  constructor(
    private authorService: AuthorService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    const authorID = route.snapshot.paramMap.get('id');

    if (authorID) {
      authorService.getAuthorDetails(authorID).subscribe((data: any) => {
        this.author = {
          key: authorID,
          name: data.name,
          imageUrl: data.photos
            ? `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`
            : 'assets/placeholder.jpg',
          birth_date: data.birth_date
            ? new Date(data.birth_date)
            : data.created.value
            ? new Date(data.created.value)
            : new Date(),
          // topWork: data.topwork,
          // subjects: data.subjects,
        };
        this.searchService
          .search(this.author.name, 'authors')
          .subscribe((searchData: any) => {
            const restNeededData = this.findAuthorInSearchResult(
              searchData.docs
            );
            this.author.topWork = restNeededData.top_work;
            this.author.subjects = restNeededData.top_subjects.slice(0, 5);
            this.author.work_count = restNeededData.work_count;
          });
      });
    }
  }

  findAuthorInSearchResult(docs: any) {
    if (docs.length === 1) {
      return docs[0];
    } else {
      let item = {};
      docs.forEach((author: any) => {
        if (author.key == this.author.key) item = { ...author };
      });

      return item;
    }
  }
}
