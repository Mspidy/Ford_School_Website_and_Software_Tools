import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // showModal = false;  // Control visibility of the modal
  // @Output() logoutConfirmed = new EventEmitter<void>(); // Emit event when confirmed

  // // Show modal
  // openModal() {
  //   this.showModal = true;
  // }

  // // Close modal without action
  // onNo() {
  //   this.showModal = false;
  // }

  // // Confirm logout
  // onYes() {
  //   this.logoutConfirmed.emit();  // Emit the event to handle logout action
  //   this.showModal = false;  // Close modal
  // }
  isModalOpen: boolean = false;

  

  // Open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(event: Event) {
    event.stopPropagation(); // Prevent modal from closing on clicking inside modal content
    this.isModalOpen = false;
  }

  // Confirm logout
  confirmLogout() {
    this.isModalOpen = false;
    // Redirect to login page after logout confirmation
    this.router.navigate(['/login']);
  }
}
