import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  titulo='Lista de Estudiantes'
  subject:Subject[];
  constructor(private service:SubjectService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(subject =>
      {
        this.subject=subject;
        
      })
  }

}
