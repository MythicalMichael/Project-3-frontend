import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddFlatComponent } from './page-add-flat.component';

describe('PageAddFlatComponent', () => {
  let component: PageAddFlatComponent;
  let fixture: ComponentFixture<PageAddFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
