import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Media } from '../media/media';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css'],
})
export class SinglePageComponent implements OnInit {
  currentMovie!: Media;
  currentMovieGenres!:string[];
  loading:boolean=false;
  constructor(
    private services: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loading =true;
    let mediatype = this.services.getMedia();
    let movieId = this.route.snapshot.params['id'];
    this.services.getCurrentMedia(movieId, mediatype).subscribe((data: any) => {
      if (mediatype === 'tv') {
        this.currentMovie = new Media(
          data.name,
          data.overview,
          data.genres,
          data.backdrop_path,
          data.id,
          data.first_air_date,
          data.vote_count,
          data.homepage,
        );
        this.loading=false;
      } else {
        this.currentMovie = new Media(
          data.original_title,
          data.overview,
          data.genres,
          data.backdrop_path,
          data.id,
          data.release_date,
          data.vote_count,
          data.homepage,
        );
        this.loading=false;
      }
    });
  }
  goBack() {
    let mediatype = this.services.getMedia().concat('s');
    if (mediatype === 'tvs') {
      mediatype = 'shows';
    }
    this.router.navigate([`/${mediatype}`]);
  }
}
