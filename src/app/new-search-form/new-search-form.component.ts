import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-new-search-form',
  templateUrl: './new-search-form.component.html',
  styleUrls: ['./new-search-form.component.css'],
})
export class NewSearchFormComponent implements OnInit{
  @ViewChild('f') form!:NgForm;
  mediaTypeResctriction:boolean = false;
  loading:boolean = false;
  resultArray!: any[];
  persons!:any[];
  errorMessage: boolean = false;
  showResult: boolean = true;
  constructor(private service: ServicesService) {}

  ngOnInit(): void {}
  
  resetForm(){
    console.log(this.form);
    this.form.reset();
    this.errorMessage=false;
    this.persons=[];
    this.resultArray=[];
  }
  resetErrorMSG(){
    this.errorMessage = false;
  }
  onSubmit() {
    this.resultArray=[];
    this.persons=[];

    if(!this.errorMessage){
      this.loading=false;
    }
    this.errorMessage=false;
    let transferData = {
      keyword: '',
      type: '',
      filter: '',
    };
    if (
      this.form.value.searchPhrase === '' &&
      this.form.value.searchSelect === '' &&
      this.form.value.filter === ''
    ) {
      this.errorMessage = true;
    } else {
      transferData.keyword = this.form.value.searchPhrase;
      transferData.type = this.form.value.searchSelect;
      transferData.filter = this.form.value.filter; 
        this.service.ultimateGetMedia(transferData).subscribe((data) => {
          if(transferData.filter ==='actore'){
            this.loading= false;
            // this.resultArray=[];
            this.persons=data;
          }else{
            this.loading= false;
            // this.persons=[];
            this.resultArray=data;
          }
      })
    }
  }
}