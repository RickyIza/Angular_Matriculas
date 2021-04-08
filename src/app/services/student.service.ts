import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService   {
  private baseEndpoint='http://localhost:8090/api/students';

  private cabeceras:HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  
    constructor(private http:HttpClient) { }
    
    public listar():Observable<Student[]>{
      return this.http.get<Student[]>(this.baseEndpoint);
    }
    public ver(id:number):Observable<Student>{
      return this.http.get<Student>(`${this.baseEndpoint}/${id}`);
    }
    public crear(student:Student):Observable<Student>{
      return this.http.post<Student>(this.baseEndpoint, student,
        {headers:this.cabeceras});  
  }
  public editar(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.baseEndpoint}/${student.idStudent}`,student,
    {headers:this.cabeceras});  
  }
  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }


public filtrarNombre(nombre:String):Observable<Student[]>{
  return this.http.get<Student[]>(`${this.baseEndpoint}/filtrar/${nombre}`);


}

}