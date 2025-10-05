import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutModalComponent } from './auth/logout-modal/logout-modal.component';
import { BotAssistantComponent } from './component/bot-assistant/bot-assistant.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MessageModalComponent } from './toaster/message-modal/message-modal.component';
import { MessageToasterComponent } from './toaster/message-toaster/message-toaster.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { HomeComponent } from './mainPage/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { TeacharListComponent } from './component/Teachers/teachar-list/teachar-list.component';
import { AddTeacherComponent } from './component/Teachers/add-teacher/add-teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { FeeManagementComponent } from './component/fee-management/fee-management.component';
import { TransportManagementComponent } from './component/transport-management/transport-management.component';
import { NewsFeedComponent } from './component/news-feed/news-feed.component';
import { SchoolTimeTableComponent } from './school-time-table/school-time-table.component';
import { TeacherConfiDialogComponent } from './teacher-confi-dialog/teacher-confi-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutModalComponent,
    BotAssistantComponent,
    DashboardComponent,
    MainLayoutComponent,
    MessageModalComponent,
    MessageToasterComponent,
    HomeComponent,
    ProfileComponent,
    StudentListComponent,
    AddStudentComponent,
    TeacharListComponent,
    AddTeacherComponent,
    FeeManagementComponent,
    TransportManagementComponent,
    NewsFeedComponent,
    SchoolTimeTableComponent,
    TeacherConfiDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatDialogModule,
    MatOptionModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
