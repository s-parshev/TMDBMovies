import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') searchPhrase:any;
  constructor(private services:ServicesService,
    private router:Router) { }

  ngOnInit(): void {}

  searchMovie(data:any){
    this.router.navigate(['./result'],{queryParams:{search:data}})
  }
}
