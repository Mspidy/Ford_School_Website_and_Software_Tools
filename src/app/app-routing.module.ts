// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './mainPage/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { AddTeacherComponent } from './component/Teachers/add-teacher/add-teacher.component';
import { TeacharListComponent } from './component/Teachers/teachar-list/teachar-list.component';
import { FeeManagementComponent } from './component/fee-management/fee-management.component';
import { TransportManagementComponent } from './component/transport-management/transport-management.component';
import { NewsFeedComponent } from './component/news-feed/news-feed.component';
import { SchoolTimeTableComponent } from './school-time-table/school-time-table.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' }, // Default to login
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  
  // Main layout with sidebar
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path:'student-list', component: StudentListComponent},
      { path:'add-student', component:AddStudentComponent},
      { path:'add-teacher', component:AddTeacherComponent},
      { path:'teacher-list', component:TeacharListComponent},
      { path:'fee-management', component: FeeManagementComponent},
      { path:'transport-management', component: TransportManagementComponent},
      { path:'news-feed', component: NewsFeedComponent},
      { path:'timetable', component: SchoolTimeTableComponent}
    ]
  },
  { path: '**', redirectTo: 'login' }, // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
