import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollment } from 'src/app/models/enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  titulo='Listado de Alumnos';
  enrollment:Enrollment= new Enrollment();
  error : any;


  constructor(
    private service:EnrollmentService,
    private router:Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
  }
  public matricula():void{
    this.service.crear(this.enrollment).subscribe(enrollment=>{
    console.log(enrollment);
    //Swal.fire('Nuevo:',`Alumno ${enrollment.firstName} creado`,'success');
    this.router.navigate(['/students']);
    },
    err=> {
      if(err.status === 500){
        this.error=err.error;
        console.log(this.error);
      }}
        );
      }



}
