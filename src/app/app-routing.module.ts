import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { FindFromGithubComponent } from './gitsearch/find-from-github/find-from-github.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: GitsearchComponent},
  { path: 'gtsearch', component: FindFromGithubComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
