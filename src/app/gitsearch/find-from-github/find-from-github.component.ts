import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http-service';

@Component({
  selector: 'app-find-from-github',
  templateUrl: './find-from-github.component.html',
  styleUrls: ['./find-from-github.component.css']
})
export class FindFromGithubComponent implements OnInit {
  userdata: boolean;
  repodetails:boolean;
  repodata: boolean;
  gtrepos: any;
  gtusers: any;
  gtuserdetails:any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  performSearch(criteria: string, data: string) {
    if (criteria === "Users") {
      this.userdata = true;
      this.httpService.searchByUser(data).then(users => {
        this.gtusers = users;
      });
    } else {
      this.repodata = true;
      this.httpService.searchByRepos(data).then(repos => {
        this.gtrepos = repos;
      });
    }
  }
  findRepos(repoLocation: string) {
    this.repodetails = true;
    this.httpService.gwtUserDetails(repoLocation).then(data => {
      this.gtuserdetails = data;
      console.log(data);
    });
  }

}
