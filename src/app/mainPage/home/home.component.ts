import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  images = [
    {
      url: 'assets/gallary6.jpg',
      caption: 'Annual Sports Day Celebration',
    },
    {
      url: 'assets/gallary11.jpg',
      caption: 'Digital Literacy Workshop for Class 6–10',
    },
    {
      url: 'assets/gallary10.jpg',
      caption: 'New Computer Lab Inauguration',
    },
    {
      url: 'assets/gallary12.jpg',
      caption: 'New Computer Lab Inauguration',
    },
    {
      url: 'assets/a1.png',
      caption: '',
    },
    {
      url: 'assets/a2.png',
      caption: '',
    },
    {
      url: 'assets/a3.png',
      caption: '',
    },
    {
      url: 'assets/a4.png',
      caption: '',
    },
    {
      url: 'assets/a5.png',
      caption: '',
    },
    {
      url: 'assets/a6.png',
      caption: '',
    },
    {
      url: 'assets/a7.png',
      caption: '',
    },
  ];

  currentSlide = 0;

  notices = [
    { text: 'Admissions open for 2025–26. Apply now!', date: '2025-10-03' },
    { text: 'Parent-teacher meeting on 12th October.', date: '2025-09-28' },
    { text: 'Mid-term exams begin 20th October.', date: '2025-09-25' },
    { text: 'School closed on 2nd November for Diwali.', date: '2025-10-01' },
    { text: 'New computer lab inaugurated.', date: '2025-09-30' },
    {
      text: 'Annual Sports Day registration closes 15th October.',
      date: '2025-09-20',
    },
  ];

  isRecent(dateStr: string): boolean {
    const today = new Date();
    const noticeDate = new Date(dateStr);
    const diff =
      (today.getTime() - noticeDate.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  }

  ngOnInit() {
    setInterval(() => this.nextSlide(), 5000); // Auto slide every 5s
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  navigate(section: string) {
    // Example navigation logic
    console.log('Navigating to:', section);
    // You can use Angular Router here
  }

  news = [
    {
      title: 'Annual Sports Day Held Successfully',
      summary:
        'Students from all grades participated in inter-house competitions with great enthusiasm.',
      image: 'assets/news7.png',
    },
    {
      title: 'Digital Literacy Workshop for Class 6–10',
      summary:
        'Hands-on training on basic computer skills and internet safety was conducted last week.',
      image: 'assets/news8.png',
    },
    {
      title: 'New Library Block Inaugurated',
      summary:
        'The school opened a new library with over 2,000 books and digital reading stations.',
      image: 'assets/news6.png',
    },
  ];

  registerStudentCount = 500;
  studentTarget = 300;
  teacherTarget = 10;
  staffTarget = 5;

  ngAfterViewInit() {
    this.animateCount('registerStudentCount', this.registerStudentCount);
    this.animateCount('studentCount', this.studentTarget);
    this.animateCount('teacherCount', this.teacherTarget);
    this.animateCount('staffCount', this.staffTarget);
  }

  animateCount(id: string, target: number) {
    const el = document.getElementById(id);
    let count = 0;
    const speed = Math.ceil(target / 100); // Adjust speed based on target
    const interval = setInterval(() => {
      count += speed;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      if (el) el.innerText = count.toString();
    }, 30); // Update every 30ms
  }

  toggleMessage(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle('expanded');
    }
  }
}
