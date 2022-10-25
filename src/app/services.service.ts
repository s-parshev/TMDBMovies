import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { Media } from './media/media';
import { BASE_URL, API_KEY } from './Constant/Constants';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url: string = '';
  page: number = 1;
  media: string = '';
  currentLoadedMedia = new Subject<any[]>();

  constructor(private http: HttpClient) {}
  
  ultimateGetMedia(data: any) {
    if (data.keyword && data.type && data.filter === 'year') {
      //year
      let year = Math.floor(data.keyword);
      if (data.type === 'movie') {
        this.url =
          BASE_URL +
          `discover/${data.type}` +
          API_KEY +
          `&primary_release_year=${year}`;
      } else {
        this.url =
          BASE_URL +
          `discover/${data.type}` +
          API_KEY +
          `&first_air_date_year=${year}`;
      }
    }
    if (data.keyword && data.type && data.filter === 'actore') {
      //actore
      console.log(data.type);
      this.url =
        BASE_URL + `search/person` + API_KEY + `&query=${data.keyword} `;
    }
    if (data.keyword && !data.type && !data.filter) {
      //keyword only
      this.url = BASE_URL + 'search/movie' + API_KEY + `&query=${data.keyword}`;
    }
    if (data.keyword && data.type && !data.filter) {
      //keyword & type
      this.url =
        BASE_URL + `search/${data.type}` + API_KEY + `&query=${data.keyword}`;
    }
    if (data.keyword && !data.type && data.filter) {
      if (data.filter === 'actore') {
        this.url =
          BASE_URL + `search/person` + API_KEY + `&query=${data.keyword}`;
      }else{
        let year = Math.floor(data.keyword);
        this.url =
        BASE_URL +
        `discover/movie` +
        API_KEY +
        `&primary_release_year=${year}`;
      }
    }
    return this.http.get(this.url).pipe(
      map((response: any) => {
        console.log(response.results);

        return response.results;
      })
    );
  }
  getGenre(currentGenre: any) {   
    console.log(currentGenre);
     
    return this.http
      .get(
        `https://api.themoviedb.org/3/discover/${currentGenre.type}?api_key=99ae3ada993fe2b331cc56149769d568&page=` +
          this.page +
          '&with_genres=' +
          currentGenre.id
      )
      .pipe(
        map((response: any) => {
          console.log(response);

          return response.results;
        })
      );
  }
  getGenres() {
    return this.http
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=99ae3ada993fe2b331cc56149769d568'
      )
      .pipe(
        map((response: any) => {
          console.log(response.genres);

          return response.genres;
        })
      );
  }
  getAllMedia(media: string, pagingInstruction?: string): Observable<any[]> {
    if (pagingInstruction === 'next') {
      this.page += 1;
    } else if (pagingInstruction === 'prev' && this.page > 1) {
      this.page -= 1;
    } else if (pagingInstruction === undefined && this.page < 1) {
      this.page = 1;
    }
    this.media = media;
    return this.http
      .get(
        'https://api.themoviedb.org/3/trending/' +
          media +
          '/day?api_key=99ae3ada993fe2b331cc56149769d568&page=' +
          this.page
      )
      .pipe(
        map((response: any) => {
          console.log(response.results);

          return response.results;
        })
      );
  }
  getMedia() {
    return this.media;
  }
  getPage() {
    return this.page;
  }
  getCurrentMedia(id: number, type?: string): Observable<Object> {
    let url =
      'https://api.themoviedb.org/3/' +
      type +
      '/' +
      id +
      '?api_key=99ae3ada993fe2b331cc56149769d568';

    return this.http.get(url);
  }
  setMedia(type: string): void {
    this.media = type;
  }
  getSearch(term: string): Observable<Object> {
    let url =
      'https://api.themoviedb.org/3/search/multi?api_key=99ae3ada993fe2b331cc56149769d568&language=en-US&include_adult=true&page=1&query=' +
      term;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }
}
