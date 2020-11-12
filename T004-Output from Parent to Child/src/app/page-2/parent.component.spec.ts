import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: Page2ParentComponent;
  let fixture: ComponentFixture<Page2ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
