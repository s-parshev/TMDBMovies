import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-films-only-page',
  templateUrl: './films-only-page.component.html',
  styleUrls: ['./films-only-page.component.css']
})
export class FilmsOnlyPageComponent implements OnInit {
  movies:any[] =[];
  currentPage!:number;
  constructor(private services:ServicesService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.services.getAllMedia('movie').subscribe(data=>{
        this.movies = data;
    })
    this.currentPage = this.services.getPage();
  }
  loadPage(comm:string){
    let mediatype = this.services.getMedia();
    this.services.getAllMedia(mediatype,comm).subscribe(data=>{
        this.movies = data;
    })
    this.currentPage = this.services.getPage();
  }
  loadCurrentMovie(media:any){
    let mediatype = this.services.getMedia();
    let mediaId = media.id;
    this.router.navigate([`./${mediatype}`, mediaId])
  }

}
