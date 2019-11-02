import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { HttpService } from './http-service';


const routes: Routes = [
  { path: 'navbar', component: NavBarComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GitSearchFormComponent,
    GitsearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
