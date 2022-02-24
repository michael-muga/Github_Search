import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'src/app/user';
import { Repositories } from 'src/app/repositories';
import { HttpClient } from "@angular/common/http";
import { Interrepo } from 'src/app/interface/repointerface';
import { Interuser } from 'src/app/interface/userinterface';
import { GitSerchService } from 'src/app/git-serch.service';
import { RepoGitService } from 'src/app/repo-git.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  userProfile!: User;
  rep: any[] = [];
  constructor(
    private gitService: GitSerchService,
    private gitRepoService: RepoGitService
  ) { }

  ngOnInit(): void {
    this.userProfile = this.gitService.userProfile;
    this.rep = this.gitRepoService.repoArr;
  }

}
