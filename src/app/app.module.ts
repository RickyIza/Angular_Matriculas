import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './components/home/home.component';
import { StudentsFormComponent } from './components/students/students-form.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SubjectsFormComponent } from './components/subjects/subjects-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {AddStudentComponent } from './components/subjects/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    StudentsComponent,
    SubjectsComponent,
    PaymentsComponent,
    HomeComponent,
    StudentsFormComponent,
    SubjectsFormComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
