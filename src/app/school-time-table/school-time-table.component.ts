import { Component, OnInit } from '@angular/core';
import { TeacherConfiDialogComponent } from '../teacher-confi-dialog/teacher-confi-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-school-time-table',
  templateUrl: './school-time-table.component.html',
  styleUrls: ['./school-time-table.component.css'],
})
export class SchoolTimeTableComponent implements OnInit {
  ngOnInit(): void {}
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  classes = ['Nursery', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  subjects = ['Math', 'English', 'EVS', 'Hindi', 'Drawing', 'Computer', 'Games', 'Revision'];
  teachers = [
  { name: 'Mr. Sharma', slot: '8:00–8:40' },
  { name: 'Ms. Verma', slot: '8:40–9:20' },
  { name: 'Mr. Khan', slot: '9:20–10:00' },
  { name: 'Ms. Gupta', slot: '10:00–10:40' },
  { name: 'Ms. Roy', slot: '10:40–11:00' },
  { name: 'Mr. Das', slot: '11:40–12:20' },
  { name: 'Mr. Yadav', slot: '12:20–1:00' },
  { name: 'Class Teacher', slot: '1:00–2:00' }
];


  expandedClass: string | null = null;

  teacherMap: Record<string, Record<string, string>> = {};

  constructor(private dialog: MatDialog) {
    // Initialize empty mapping
    this.classes.forEach(cls => {
      this.teacherMap[cls] = {};
      this.subjects.forEach(sub => {
        this.teacherMap[cls][sub] = '';
      });
    });
  }

  toggleClass(className: string) {
    this.expandedClass = this.expandedClass === className ? null : className;
  }

  isExpanded(className: string): boolean {
    return this.expandedClass === className;
  }

  openTeacherConfig() {
  const dialogRef = this.dialog.open(TeacherConfiDialogComponent, {
    width: '900px',
    data: {
      classes: this.classes,
      subjects: this.subjects,
      teachers: this.teachers,
      teacherMap: this.teacherMap
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.teacherMap = result;
    }
  });
}


  getPeriods(className: string, day: string) {
    const times = [
      '8:00–8:40', '8:40–9:20', '9:20–10:00', '10:00–10:40', '10:40–11:00',
      '11:40–12:20', '12:20–1:00', '1:00–2:00'
    ];

    return this.subjects.map((subject, i) => ({
      subject,
      teacher: this.teacherMap[className]?.[subject] || 'Unassigned',
      time: times[i]
    }));
  }
}
