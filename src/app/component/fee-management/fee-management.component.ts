import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ExtraFee {
  type: string;
  month: string;
  amount: number;
  selected?: boolean;
}

interface MonthBreakdown {
  name: string;
  baseFee: number;
  extraFees: ExtraFee[];
  total: number;
}

interface Student {
  rollNo: number;
  name: string;
  class: string;
  session: string;
  paid: number;
  startDate: string;
  currentDate: string;
  extraFees: ExtraFee[];
  monthlyBreakdown?: MonthBreakdown[];
  calculatedFee?: number;
}

@Component({
  selector: 'app-fee-management',
  templateUrl: './fee-management.component.html',
  styleUrls: ['./fee-management.component.css'],
})
export class FeeManagementComponent implements OnInit {
  today: Date = new Date();
  selectedStudent: Student | null = null;

  classOptions = [
    'Nursery',
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
    '11',
    '12',
  ];
  searchQuery = '';
  selectedClass = '';

  students: Student[] = [
    {
      rollNo: 1,
      name: 'Amit Kumar',
      class: '10',
      session: '2025–2026',
      paid: 0,
      startDate: '2025-03-01', // ➜ ~6.5 months ➜ RED
      currentDate: '',
      extraFees: [],
    },
    {
      rollNo: 2,
      name: 'Riya Singh',
      class: '9',
      session: '2025–2026',
      paid: 0,
      startDate: '2025-06-01', // ➜ ~3.5 months ➜ YELLOW
      currentDate: '',
      extraFees: [],
    },
    {
      rollNo: 3,
      name: 'Saurabh Yadav',
      class: '8',
      session: '2025–2026',
      paid: 0,
      startDate: '2025-08-20', // ➜ <1 month ➜ GREEN
      currentDate: '',
      extraFees: [],
    },
    {
      rollNo: 4,
      name: 'Neha Kumari',
      class: '11',
      session: '2025–2026',
      paid: 0,
      startDate: '2025-05-01', // ➜ ~4.5 months ➜ YELLOW
      currentDate: '',
      extraFees: [],
    },
    {
      rollNo: 5,
      name: 'Rohit Raj',
      class: '12',
      session: '2025–2026',
      paid: 0,
      startDate: '2025-02-15', // ➜ ~7 months ➜ RED
      currentDate: '',
      extraFees: [],
    },
  ];

  filteredStudents: Student[] = [];

  ngOnInit(): void {
    const todayStr = new Date().toISOString().split('T')[0];
    this.students.forEach((student) => {
      student.currentDate = todayStr;
      student.paid = 0;
    });
    this.filteredStudents = [...this.students];
  }

  filterStudents() {
    this.filteredStudents = this.students.filter(
      (s) =>
        (!this.selectedClass || s.class === this.selectedClass) &&
        (!this.searchQuery ||
          s.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          s.rollNo.toString().includes(this.searchQuery))
    );
  }

  calculateFee(start: string, end: string, extraFees: ExtraFee[]): number {
    const monthlyFee = 500;
    if (!start || !end) return 0;

    const startDate = new Date(start);
    const endDate = new Date(end);
    const months = this.getMonthRange(startDate, endDate);

    let total = 0;

    months.forEach((month) => {
      const extras = extraFees.filter((f) => f.month === month);
      const extraTotal = extras.reduce((sum, f) => sum + f.amount, 0);
      total += monthlyFee + extraTotal;
    });

    return total;
  }

  generateInvoice(student: Student) {
    if (!student.startDate || !student.currentDate) return;

    const start = new Date(student.startDate);
    const end = new Date(student.currentDate);
    const months = this.getMonthRange(start, end);
    const monthlyFee = 500;

    student.monthlyBreakdown = months.map((month) => {
      const extras = student.extraFees?.filter((f) => f.month === month) || [];
      const extraTotal = extras.reduce((sum, f) => sum + f.amount, 0);

      return {
        name: month,
        baseFee: monthlyFee,
        extraFees: extras,
        total: monthlyFee + extraTotal,
      };
    });

    student.calculatedFee = student.monthlyBreakdown.reduce(
      (sum, m) => sum + m.total,
      0
    );

    this.selectedStudent = student;
  }

  closeModal() {
    this.selectedStudent = null;
  }

  downloadPDF() {
    const element = document.getElementById('invoiceContent');
    if (!element) return;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Invoice_${this.selectedStudent?.name}.pdf`);
    });
  }

  getMonthRange(start: Date, end: Date): string[] {
    const months: string[] = [];
    const current = new Date(start.getFullYear(), start.getMonth(), 1);
    const last = new Date(end.getFullYear(), end.getMonth(), 1);

    while (current <= last) {
      const monthName = current.toLocaleString('default', { month: 'long' });
      months.push(monthName);
      current.setMonth(current.getMonth() + 1);
    }

    return months;
  }

  showFeeDropdown = false;

  globalExtraFees: ExtraFee[] = [
    { type: 'Exam Fee', amount: 100, selected: false, month: '' },
    { type: 'Function Fee', amount: 100, selected: false, month: '' },
    { type: 'ID-Card Fee', amount: 100, selected: false, month: '' },
  ];

  monthOptions = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
  ];

  toggleFeeDropdown() {
    this.showFeeDropdown = !this.showFeeDropdown;
  }

  showToast = false;

  applyGlobalFees() {
    const selectedFees = this.globalExtraFees.filter(
      (f) => f.selected && f.month
    );

    this.students.forEach((student) => {
      student.extraFees = student.extraFees || [];

      selectedFees.forEach((fee) => {
        const alreadyExists = student.extraFees.some(
          (ef) => ef.type === fee.type && ef.month === fee.month
        );
        if (!alreadyExists) {
          student.extraFees.push({
            type: fee.type,
            month: fee.month,
            amount: fee.amount,
          });
        }
      });

      // Recalculate fee after applying extras
      const start = new Date(student.startDate);
      const end = new Date(student.currentDate);
      const months = this.getMonthRange(start, end);
      const monthlyFee = 500;

      student.monthlyBreakdown = months.map((month) => {
        const extras =
          student.extraFees?.filter((f) => f.month === month) || [];
        const extraTotal = extras.reduce((sum, f) => sum + f.amount, 0);

        return {
          name: month,
          baseFee: monthlyFee,
          extraFees: extras,
          total: monthlyFee + extraTotal,
        };
      });

      student.calculatedFee = student.monthlyBreakdown.reduce(
        (sum, m) => sum + m.total,
        0
      );

      // Refresh invoice if open
      if (this.selectedStudent?.rollNo === student.rollNo) {
        this.generateInvoice(student);
      }
    });

    this.toggleFeeDropdown();
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

  getDurationClass(start: string, end: string): string {
    if (!start || !end) return '';

    const startDate = new Date(start);
    const endDate = new Date(end);

    const totalDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const totalMonths = totalDays / 30;
    if (totalMonths >= 5) return 'duration-red';
    if (totalMonths >= 3) return 'duration-yellow';
    if (totalMonths < 1) return 'duration-green';
    return '';
  }

  showColorInfo = false;

  toggleColorInfo() {
    this.showColorInfo = !this.showColorInfo;
  }
}
