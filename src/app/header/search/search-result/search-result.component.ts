import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  searchTerm: string = '';
  result!:any[] ;
  constructor(
    private services: ServicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.searchTerm = params['search'];      
    });
    if (!this.searchTerm) {
      console.log('loading...', this.searchTerm);
    } else {
      this.services.getSearch(this.searchTerm).subscribe((data: any) => {
        // for(const key in data){
        //   if(data[key].backdrop_path===null || data[key].backdrop_path === undefined){
        //     delete data[key];
        //   }else{
        //     this.result.push(data[key])
        //   }
        // }
        console.log(data)
        this.result =data;
      });
    }
  }
  loadCurrentMovie(data:any){

  }
}
