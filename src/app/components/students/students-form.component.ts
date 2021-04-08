import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  titulo="Crear Estudiantes";
  student:Student= new Student();
  error : any;

  constructor(private service:StudentService,
              private router:Router,
              private route:ActivatedRoute
    ) { }
   
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      if(id){
        this.service.ver(id).subscribe(
          student=>{
          this.student=this.student
        })
      }
     } )

  }


  public crear():void{
  this.service.crear(this.student).subscribe(student=>{
  console.log(student);
  Swal.fire('Nuevo:',`Alumno ${student.firstName} creado`,'success');
  this.router.navigate(['/students']);
  },
  err=> {
    if(err.status === 500){
      this.error=err.error;
      console.log(this.error);
    }}
      );
    }

    public editar():void{
      this.service.editar(this.student).subscribe(student=>{
      console.log(student);
      Swal.fire('Modificar:',`Alumno ${student.firstName} Actualizado con exito`,'success');
      this.router.navigate(['/students']);
      },err=>{
        if(err.status===500){
          this.error=err.error;
          console.log(this.error);
        }}
          );
        }
  
  
  
}

