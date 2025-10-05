import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showSuccess = false;
  loginError:string=''
  hidePassword: boolean = true;

  

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }
  
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onForgotPassword() {
    // Here you would typically navigate to a Forgot Password page or show a reset password modal.
    console.log('Forgot Password clicked!');
    // You can redirect to a new component or open a modal for password reset.
  }

  onSubmit() {
    const dummyEmail = 'admin@gmail.com';
    const dummyPassword = 'admin123';
  
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      if (email === dummyEmail && password === dummyPassword) {
        console.log('✅ Login successful');
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
          this.router.navigate(['/main/dashboard']);
        }, 1000);
      } else {
        console.log('❌ Invalid credentials');
        this.loginError = 'Invalid email or password.';
      }
    }
  }
  

}
