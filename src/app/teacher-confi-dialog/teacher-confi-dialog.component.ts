import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-teacher-confi-dialog',
  templateUrl: './teacher-confi-dialog.component.html',
  styleUrls: ['./teacher-confi-dialog.component.css']
})
export class TeacherConfiDialogComponent implements OnInit {

  ngOnInit(): void {
  }

  classes: string[] = [];
  subjects: string[] = [];
  teacherMap: Record<string, Record<string, any>> = {};
  teachers: { name: string; slot: string }[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TeacherConfiDialogComponent>
  ) {
    this.classes = data.classes;
    this.subjects = data.subjects;
    this.teacherMap = JSON.parse(JSON.stringify(data.teacherMap));
    this.teachers = data.teachers;
  }

  assignTeacher(event: CdkDragDrop<any>, className: string, subject: string) {
    const teacher = event.item.data;
    this.teacherMap[className][subject] = teacher;
  }

  save() {
    this.dialogRef.close(this.teacherMap);
  }

}
