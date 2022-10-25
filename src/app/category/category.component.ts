import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  genres!: any[];
  currentGenre:any;
  constructor(private services: ServicesService, private router:Router) {}
  ngOnInit(): void {
    this.services.getGenres().subscribe((data:any) => {
        this.genres = data;        
    });
  }
  displayGenre(data:string, type:string){
      let id = data;
      this.router.navigate(['./category', id, type])
  }
}
