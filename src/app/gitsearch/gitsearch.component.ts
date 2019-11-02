import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service';
import { User } from '../user';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  userdata: User;
  repos: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.userInfo().then(data => {
      this.userdata = data;

    });

    this.httpService.getUserRepo().then(data => {
      this.repos = data;

    })

  }

}
