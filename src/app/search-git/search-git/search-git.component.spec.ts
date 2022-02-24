import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGitComponent } from './search-git.component';

describe('SearchGitComponent', () => {
  let component: SearchGitComponent;
  let fixture: ComponentFixture<SearchGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
