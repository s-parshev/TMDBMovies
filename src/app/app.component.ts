import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video2-app';
  loadedMedia:any[] =[];
  constructor(private services:ServicesService){}

  
}
