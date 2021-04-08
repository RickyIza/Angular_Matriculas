import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private baseEndpoint='http://localhost:8090/api/enrollment';

  private cabeceras:HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  
    constructor(private http:HttpClient) { }
    
    public listar():Observable<Enrollment[]>{
      return this.http.get<Enrollment[]>(this.baseEndpoint);
    }
    public ver(id:number):Observable<Enrollment>{
      return this.http.get<Enrollment>(`${this.baseEndpoint}/${id}`);
    }
    public crear(student:Enrollment):Observable<Enrollment>{
      return this.http.post<Enrollment>(this.baseEndpoint, student,
        {headers:this.cabeceras});  
  }
  public editar(enrollment:Enrollment):Observable<Enrollment>{
    return this.http.put<Enrollment>(`${this.baseEndpoint}/${enrollment.id}`,enrollment,
    {headers:this.cabeceras});  
  }
  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }


  
}
