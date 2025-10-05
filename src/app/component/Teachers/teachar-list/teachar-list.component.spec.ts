import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacharListComponent } from './teachar-list.component';

describe('TeacharListComponent', () => {
  let component: TeacharListComponent;
  let fixture: ComponentFixture<TeacharListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacharListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacharListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
