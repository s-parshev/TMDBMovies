import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loadedMedia:string='film'
  constructor(private services:ServicesService) { }

  ngOnInit(): void {
    this.loadedMedia = this.services.getMedia();
    console.log(this.loadedMedia)
  }

}
