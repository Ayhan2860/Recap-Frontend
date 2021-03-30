import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercarComponent } from './filtercar.component';

describe('FiltercarComponent', () => {
  let component: FiltercarComponent;
  let fixture: ComponentFixture<FiltercarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
