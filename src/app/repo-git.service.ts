import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { User } from './user';
import { Repositories } from "./repositories";
import { HttpClient } from "@angular/common/http";
import { Interrepo } from './interface/repointerface';
import { Interuser } from './interface/userinterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoGitService {
  getSearchResults(search: any) {
    throw new Error('Method not implemented.');
  }
  repo:any;
  repoArr: any[] = [];
  url = "https://api.github.com/users/"
  
  constructor(private http: HttpClient, private router: Router) { }
  getRepoDetails(user: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get<Interrepo>(this.url + user + '/repos' + "?access_token'=" + environment.personal_AccessToken).toPromise().then(
          (response:any) => {
            response.forEach((response:any) => {
              this.repo = new Repositories(
                response.name,
                response.html_url,
                new Date(response.created_at),
                response.clone_url,
                response.forks_count,
                response.homepage,
                response.description,
                response.stargazers_count
              );
              if (response.name !== "") {
                this.repoArr.push(this.repo);
              }
             
            });

            resolve(response);
          },
          (error) => {
            if ((error.status = 404)) {
              this.router.navigate(["/err"]);
            }
            reject(error);
          }
        );
    });
    return promise;
  }
}
