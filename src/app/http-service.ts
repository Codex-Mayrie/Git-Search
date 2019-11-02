import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user: User;
  constructor(private http: HttpClient) {}
  userInfo():Promise<any> {
    interface ApiResponse {
      name: string;
      bio: string;
      followers: number;
      following: number;
      repos: string;
      avatar_url: string;
    }
      const promise = new Promise((resolve, reject) => {
        const apiUrl = `https://api.github.com/users/shee1998?access_token=${environment.accessToken}`;
        this.http
          .get<ApiResponse>(apiUrl)
          .toPromise()
          .then(res => {
            // console.log(res);
            resolve(res);

          })
          .catch(error => reject(error));
      });
      return promise;
    }

    getUserRepo(): Promise<any> {
      const promise = new Promise((resolve, reject) => {
        const apiUrl = `https://api.github.com/users/shee1998/repos?access_token=${environment.accessToken}`;
        this.http
          .get<any>(apiUrl)
          .toPromise()
          .then(res => {
            console.log(res);
            resolve(res);
          })
          .catch(error => reject(error));
      });
      return promise;
    }
}
