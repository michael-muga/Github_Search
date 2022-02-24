import { TestBed } from '@angular/core/testing';

import { GitSerchService } from './git-serch.service';

describe('GitSerchService', () => {
  let service: GitSerchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSerchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
