import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  holidayList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://holidayapi.com/v1/holidays?key=3d408fdf-5312-4a72-9036-6a00a27670d2&country=US&year=2024'
      )
      .subscribe((res: any) => {
        this.holidayList = res.holidays;
      });
  }

  totalStudents = 1200;
  totalTeachers = 85;
  totalRevenue = 4500000;
  totalStaff = 110;

  studentClassData = [
    { class: '10', section: 'A', count: 45 },
    { class: '9', section: 'B', count: 42 },
    // ...
  ];

  teacherClassData = [
    { class: '10', subject: 'Math', name: 'Amit Kumar' },
    { class: '9', subject: 'English', name: 'Riya Singh' },
    // ...
  ];
}
