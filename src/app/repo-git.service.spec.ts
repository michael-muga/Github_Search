import { TestBed } from '@angular/core/testing';

import { RepoGitService } from './repo-git.service';

describe('RepoGitService', () => {
  let service: RepoGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
