import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

interface Teacher {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  joiningDate: string;
  session: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-teachar-list',
  templateUrl: './teachar-list.component.html',
  styleUrls: ['./teachar-list.component.css'],
})
export class TeacharListComponent implements OnInit {
  constructor(private router: Router) {}

  currentSession = '2025–2026';

  addTeacher() {
    this.router.navigate(['/main/add-teacher']);
  }

  teachers: Teacher[] = [
    {
      id: 1,
      name: 'Amit Kumar',
      designation: 'Math Teacher',
      qualification: 'M.Sc, B.Ed',
      joiningDate: '2018-06-15',
      session: '2025–2026',
      status: 'active',
      image: 'myimg.jpg',
    },
    {
      id: 2,
      name: 'Riya Singh',
      designation: 'English Teacher',
      qualification: 'M.A, B.Ed',
      joiningDate: '2019-07-10',
      session: '2025–2026',
      status: 'active',
      image: 'myimg.jpg',
    },
    {
      id: 3,
      name: 'Kabir Khan',
      designation: 'Science Teacher',
      qualification: 'M.Sc, B.Ed',
      joiningDate: '2020-01-20',
      session: '2025–2026',
      status: 'inactive',
      image: 'myimg.jpg',
    },
    {
      id: 4,
      name: 'Sneha Mishra',
      designation: 'Hindi Teacher',
      qualification: 'M.A, B.Ed',
      joiningDate: '2021-03-05',
      session: '2025–2026',
      status: 'active',
      image: 'myimg.jpg',
    },
    {
      id: 5,
      name: 'Devansh Gupta',
      designation: 'Computer Teacher',
      qualification: 'B.Tech, MCA',
      joiningDate: '2022-08-12',
      session: '2025–2026',
      status: 'active',
      image: 'myimg.jpg',
    },
  ];

  sortedTeachers = [...this.teachers];
  sortDirection = 'asc';
  currentSortColumn: keyof Teacher = 'id';

  ngOnInit() {
    this.sortData(this.currentSortColumn);
  }

  sortData(column: keyof Teacher) {
    if (this.currentSortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortColumn = column;
      this.sortDirection = 'asc';
    }

    this.sortedTeachers = [...this.teachers].sort((a, b) => {
      let valA = a[column];
      let valB: any = b[column];

      if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      return this.sortDirection === 'asc'
        ? valA < valB
          ? -1
          : valA > valB
          ? 1
          : 0
        : valA > valB
        ? -1
        : valA < valB
        ? 1
        : 0;
    });
  }

  filters = {
    designation: '',
    qualification: '',
    session: '',
  };

  designationOptions = [
    'Math Teacher',
    'English Teacher',
    'Science Teacher',
    'Hindi Teacher',
    'Computer Teacher',
  ];

  qualificationOptions = ['M.Sc, B.Ed', 'M.A, B.Ed', 'B.Tech, MCA'];

  sessionOptions = ['2024–2025', '2025–2026', '2026–2027'];

  applyFilters() {
    this.sortedTeachers = this.teachers.filter(
      (teacher) =>
        (!this.filters.designation ||
          teacher.designation === this.filters.designation) &&
        (!this.filters.qualification ||
          teacher.qualification === this.filters.qualification) &&
        (!this.filters.session || teacher.session === this.filters.session)
    );
  }

  downloadExcel() {
    const exportData = this.sortedTeachers.map((teacher) => ({
      ID: teacher.id,
      Name: teacher.name,
      Designation: teacher.designation,
      Qualification: teacher.qualification,
      JoiningDate: teacher.joiningDate,
      Session: teacher.session,
      Status: teacher.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Teachers');
    XLSX.writeFile(workbook, 'Teacher_List.xlsx');
  }

  toggleStatus(teacher: Teacher) {
    teacher.status = teacher.status === 'active' ? 'inactive' : 'active';
    console.log(`Status changed for ${teacher.name}: ${teacher.status}`);
    // Optionally trigger API update here
  }
}
