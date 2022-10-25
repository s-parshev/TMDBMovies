import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { FilmsOnlyPageComponent } from './films-only-page/films-only-page.component';
import { ShowOnlyPageComponent } from './show-only-page/show-only-page.component';
import { ServicesService } from './services.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './header/search/search.component';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import { ResultComponent } from './result/result.component';
import { SearchResultComponent } from './header/search/search-result/search-result.component';
import { NewSearchFormComponent } from './new-search-form/new-search-form.component';

const appRoute = [
  { path: '', component: FirstPageComponent },
  { path: 'movies', component: FilmsOnlyPageComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: SingleCategoryComponent },
  { path: 'category/:id/:type', component: SingleCategoryComponent },
  { path: 'movie/:id', component: SinglePageComponent },
  { path: 'shows', component: ShowOnlyPageComponent },
  { path: 'tv/:id', component: SinglePageComponent },
  { path: 'result', component: SearchResultComponent },
  { path: 'new_result', component: NewSearchFormComponent },
  { path: 'search/:id', component: ResultComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SinglePageComponent,
    FilmsOnlyPageComponent,
    ShowOnlyPageComponent,
    HeaderComponent,
    CategoryComponent,
    SearchComponent,
    SingleCategoryComponent,
    ResultComponent,
    SearchResultComponent,
    NewSearchFormComponent,
  ],
  imports: [ BrowserModule, RouterModule.forRoot(appRoute), HttpClientModule, FormsModule],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
