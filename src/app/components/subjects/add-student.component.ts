import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { Subject } from 'src/app/models/subject';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  subject:Subject;
  studentAsignar:Student[];
  mostrarColumnas:string[]=['firstName','lastName','seleccion'];

  seleccion:SelectionModel<Student>=new SelectionModel<Student>(true,[])
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private Subjectservice:SubjectService,
    private Studentservice:StudentService,
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      if(id){
        this.Subjectservice.ver(id).subscribe(
          subject=>{
          this.subject=this.subject
        })
      }
     } )

  }
  filtrar(nombre:string):void{
    nombre=nombre!==undefined?nombre.trim():'';
    if(nombre !== ''){

      this.Studentservice.filtrarNombre(nombre)
      .subscribe(Student=>this.studentAsignar=Student
        );

    }
  }



}

