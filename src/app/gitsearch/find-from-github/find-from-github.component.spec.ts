import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFromGithubComponent } from './find-from-github.component';

describe('FindFromGithubComponent', () => {
  let component: FindFromGithubComponent;
  let fixture: ComponentFixture<FindFromGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFromGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFromGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
