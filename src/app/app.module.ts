import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { HttpService } from './http-service';
import { FindFromGithubComponent } from './gitsearch/find-from-github/find-from-github.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GitSearchFormComponent,
    GitsearchComponent,
    FindFromGithubComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
