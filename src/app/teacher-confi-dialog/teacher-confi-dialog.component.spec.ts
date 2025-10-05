import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConfiDialogComponent } from './teacher-confi-dialog.component';

describe('TeacherConfiDialogComponent', () => {
  let component: TeacherConfiDialogComponent;
  let fixture: ComponentFixture<TeacherConfiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherConfiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherConfiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
