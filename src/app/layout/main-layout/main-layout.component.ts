import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutModalComponent } from 'src/app/auth/logout-modal/logout-modal.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('bellIcon', { static: false }) bellIconRef!: ElementRef<HTMLElement>;
  currentTime: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Update every second
  }
  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); // e.g., "3:45:12 PM"
  }

  isCollapsed = false;
  isPopupOpen = false;
  @ViewChild(LogoutModalComponent) logoutModal!: LogoutModalComponent;

  user = {
    name: 'Admin User',
    email: 'admin@example.com'
  };

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogout() {
    this.logoutModal.openModal(); // Show the modal
  }

  // Handle actual logout (navigate to login)
  logout() {
    this.router.navigate(['/login']); // Redirect to login
  }

  onNotificationsClick() {
    const bell = this.bellIconRef.nativeElement;

    bell.classList.add('ringing');

    setTimeout(() => {
      bell.classList.remove('ringing');
    }, 1000);

    this.isPopupOpen = !this.isPopupOpen; // Optional popup toggle
  }

}
