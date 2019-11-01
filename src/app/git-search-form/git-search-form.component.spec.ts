import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchFormComponent } from './git-search-form.component';

describe('GitSearchFormComponent', () => {
  let component: GitSearchFormComponent;
  let fixture: ComponentFixture<GitSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
