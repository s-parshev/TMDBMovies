import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-show-only-page',
  templateUrl: './show-only-page.component.html',
  styleUrls: ['./show-only-page.component.css']
})
export class ShowOnlyPageComponent implements OnInit {
  shows:any[] =[];
  currentPage!:number;
  constructor(private services:ServicesService, private router:Router) { }

  ngOnInit(): void {
    this.services.getAllMedia('tv').subscribe(data=>{
        this.shows = data;
      })
    this.currentPage = this.services.getPage();
  }
  loadPage(comm:string){
    let mediatype = this.services.getMedia();
    this.services.getAllMedia(mediatype,comm).subscribe(data=>{
        this.shows = data;
    })
    this.currentPage = this.services.getPage();
  }
  loadCurrentMovie(media:any){
    let mediatype = this.services.getMedia();
    let mediaId = media.id;
    this.router.navigate([`./${mediatype}`, mediaId])
  }
  
}
