import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ChildComponent } from './child.component';

describe('Page1ChildComponent', () => {
  let component: Page1ChildComponent;
  let fixture: ComponentFixture<Page1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
