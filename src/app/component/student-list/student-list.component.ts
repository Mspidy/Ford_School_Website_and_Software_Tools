import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

interface Student {
  rollNo: number;
  name: string;
  class: string;
  section: string;
  fatherName: string;
  motherName: string;
  session: string;
  dob: string;
  gender: string;
  status: string;
  image:string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  constructor(private router: Router) {}
  currentSession = '2025–2026';


  addStudent() {
    this.router.navigate(['/main/add-student']);
  }

  // students: Student[] = [
  //   { rollNo: 1, name: 'Amit Kumar', class: '10', section: 'A' },
  //   { rollNo: 2, name: 'Riya Singh', class: '10', section: 'B' },
  //   { rollNo: 3, name: 'Sohan Das', class: '9', section: 'A' },
  //   { rollNo: 4, name: 'Neha Verma', class: '9', section: 'B' },
  // ];

  students: Student[] = [
  {
    rollNo: 1,
    name: 'Amit Kumar',
    class: '10',
    section: 'A',
    fatherName: 'Rajesh Kumar',
    motherName: 'Sunita Devi',
    session: '2025-2026',
    dob: '2009-04-15',
    gender: 'Male',
    status: 'active',
    image:'myimg.jpg'
  },
  {
    rollNo: 2,
    name: 'Riya Singh',
    class: '10',
    section: 'B',
    fatherName: 'Manoj Singh',
    motherName: 'Kavita Singh',
    session: '2025-2026',
    dob: '2009-08-22',
    gender: 'Female',
    status: 'active',
    image:'myimg.jpg'
  },
  {
    rollNo: 3,
    name: 'Sohan Das',
    class: '9',
    section: 'A',
    fatherName: 'Dinesh Das',
    motherName: 'Meena Das',
    session: '2025-2026',
    dob: '2010-01-10',
    gender: 'Male',
    status: 'inactive',
    image:'myimg.jpg'
  },
  {
    rollNo: 4,
    name: 'Neha Verma',
    class: '9',
    section: 'B',
    fatherName: 'Ravi Verma',
    motherName: 'Pooja Verma',
    session: '2025-2026',
    dob: '2010-06-05',
    gender: 'Female',
    status: 'active',
    image:'myimg.jpg'
  },
  {
    rollNo: 5,
    name: 'Arjun Yadav',
    class: '8',
    section: 'C',
    fatherName: 'Mahesh Yadav',
    motherName: 'Lata Yadav',
    session: '2025-2026',
    dob: '2011-03-12',
    gender: 'Male',
    status: 'active',
    image:'myimg.jpg'
  },
  {
    rollNo: 6,
    name: 'Priya Sharma',
    class: '8',
    section: 'D',
    fatherName: 'Rakesh Sharma',
    motherName: 'Anita Sharma',
    session: '2025-2026',
    dob: '2011-07-19',
    gender: 'Female',
    status: 'inactive',
    image:'myimg.jpg'
  },
  {
    rollNo: 7,
    name: 'Kabir Khan',
    class: '7',
    section: 'A',
    fatherName: 'Imran Khan',
    motherName: 'Saira Khan',
    session: '2025-2026',
    dob: '2012-02-25',
    gender: 'Male',
    status: 'active',
    image:'myimg.jpg'
  },
  {
    rollNo: 8,
    name: 'Sneha Mishra',
    class: '7',
    section: 'B',
    fatherName: 'Alok Mishra',
    motherName: 'Rekha Mishra',
    session: '2025-2026',
    dob: '2012-09-30',
    gender: 'Female',
    status: 'active',
    image:'myimg.jpg'
  },
  {
    rollNo: 9,
    name: 'Devansh Gupta',
    class: '6',
    section: 'C',
    fatherName: 'Sanjay Gupta',
    motherName: 'Poonam Gupta',
    session: '2025-2026',
    dob: '2013-05-18',
    gender: 'Male',
    status: 'inactive',
    image:'myimg.jpg'
  },
  {
    rollNo: 10,
    name: 'Ishita Roy',
    class: '6',
    section: 'D',
    fatherName: 'Anil Roy',
    motherName: 'Shalini Roy',
    session: '2025-2026',
    dob: '2013-11-03',
    gender: 'Female',
    status: 'active',
    image:'myimg.jpg'
  },
];


  sortedStudents = [...this.students];
  sortDirection = 'asc';
  currentSortColumn: keyof Student = 'rollNo';

  ngOnInit() {
    this.sortData(this.currentSortColumn);
  }

  sortData(column: keyof Student) {
    if (this.currentSortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortColumn = column;
      this.sortDirection = 'asc';
    }

    this.sortedStudents = [...this.students].sort((a, b) => {
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
    class: '',
    section: '',
    session: '',
  };

  classOptions = [
    'Nur',
    'LKG',
    'UKG',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];
  sectionOptions = ['A', 'B', 'C', 'D'];
  sessionOptions = ['2024–2025', '2025–2026', '2026–2027'];

  applyFilters() {
    this.sortedStudents = this.students.filter(
      (student) =>
        (!this.filters.class || student.class === this.filters.class) &&
        (!this.filters.section || student.section === this.filters.section) &&
        (!this.filters.session || student.session === this.filters.session)
    );
  }

  downloadExcel() {
    const exportData = this.sortedStudents.map((student) => ({
      RollNo: student.rollNo,
      Name: student.name,
      Class: student.class,
      Section: student.section,
      FatherName: student.fatherName,
      MotherName: student.motherName,
      Session: student.session,
      DOB: student.dob,
      Gender: student.gender,
      Status: student.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'Student_List.xlsx');
  }

  toggleStatus(student: Student) {
  student.status = student.status === 'active' ? 'inactive' : 'active';
  console.log(`Status changed for ${student.name}: ${student.status}`);
  // Optionally trigger API update here
}

}
