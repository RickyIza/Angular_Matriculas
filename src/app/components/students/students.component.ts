import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  titulo='Lista de Estudiantes'
  students:Student[];
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(students =>
      {
        this.students=students;
        
      })
  }

  public eliminar(student:Student):void{

    Swal.fire({
      title: 'Cuidado:?',
      text: `Seguro que desea elimnar a ${student.firstName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(student.idStudent).subscribe(()=>{
          this.students=this.students.filter(a=>a!==student);
          Swal.fire('Eliminado:',`Estudiante ${student.firstName} eliminado con exito`,'warning');
        });
      }
    })
}
  
  



  }



