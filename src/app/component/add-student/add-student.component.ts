import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  selectedPhoto: File | null = null;

  classOptions = [
    'Nur',
    'LKG',
    'UKG',
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
  ];
  sectionOptions = ['A', 'B', 'C', 'D'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      rollNo: ['STU001', Validators.required],
      name: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [''],
      fatherName: [''],
      motherName: [''],
      guardianContact: [''],
      address: [''],
      status: ['active'],
      admissionDate: [''],
      bloodGroup: [''],
      nationality: [''],
      notes: [''],
    });
  }

  // onPhotoSelected(event: any) {
  //   this.selectedPhoto = event.target.files[0];
  // }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formData = { ...this.studentForm.value, photo: this.selectedPhoto };
      console.log('Student Submitted:', formData);
      // API logic here

      // Reset form
      this.studentForm.reset({ status: 'active' });
      this.selectedPhoto = null;
      this.photoPreviewUrl = null;
    }
  }

  photoPreviewUrl: string | ArrayBuffer | null = null;

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedPhoto = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreviewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
