import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  currentPage!: number;
  allMediaMoviesAndShows: any[] = [];
  constructor(
    private services: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.services.getAllMedia('all').subscribe((data) => {
      this.allMediaMoviesAndShows = data;
    });
    this.currentPage = this.services.getPage();
  }
  loadPage(comm: string) {
    let mediatype = this.services.getMedia();
    this.services.getAllMedia(mediatype, comm).subscribe((data) => {
      this.allMediaMoviesAndShows = data;
    });
    this.currentPage = this.services.getPage();
  }
  displayMedia(media: any) {
    if (media.media_type === 'tv') {
      this.router.navigate(['./tv', media.id]);
      this.services.setMedia('tv');
    } else {
      this.router.navigate(['./movie', media.id]);
      this.services.setMedia('movie');
    }
  }
}
