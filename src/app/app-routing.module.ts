import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentsFormComponent } from './components/students/students-form.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/subjects/add-student.component';
import { SubjectsFormComponent } from './components/subjects/subjects-form.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  {path:'',pathMatch: 'full',redirectTo:'alumnos'},
  {path:'alumnos',component:AlumnosComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/form',component:StudentsFormComponent},
  {path:'students/form/:id',component:StudentsFormComponent},
  {path:'subjects/form',component:SubjectsFormComponent},
  {path:'subjects',component:SubjectsComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'subjects/add-student',component:AddStudentComponent},
  {path:'subjects/add-student/:id',component:AddStudentComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
