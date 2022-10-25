import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  genre!: any[];
  genreId!: string;
  genreType!: string;
  ngInitCounter: number = 0;
  sendData = new Subject<string>;
  constructor(
    private services: ServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.genreId = this.route.snapshot.params['id'];
    this.genreType = this.route.snapshot.params['type'];
    let currentGenre = { id:this.genreId, type:this.genreType};
    console.log(currentGenre," currentGenre");
    
    this.services
      // .getGenre(this.genreId.toLocaleLowerCase())
      .getGenre(currentGenre)
      .subscribe((data) => {
        this.genre = data;
        console.log('single category component: ',data);
        
      });
  }
  toCategory(){
    this.router.navigate(['./category'])
  }
  loadCurrentMedia(media:any){
    // this.router.navigate(['/movie',media.id]);
    console.log(media);
  }
}

