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
  selector: 'app-search-git',
  templateUrl: './search-git.component.html',
  styleUrls: ['./search-git.component.css']
})
export class SearchGitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
