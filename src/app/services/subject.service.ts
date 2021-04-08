import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseEndpoint='http://localhost:8090/api/courses';

  private cabeceras:HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  
    constructor(private http:HttpClient) { }
    
    public listar():Observable<Subject[]>{
      return this.http.get<Subject[]>(this.baseEndpoint);
    }
    public ver(id:number):Observable<Subject>{
      return this.http.get<Subject>(`${this.baseEndpoint}/${id}`);
    }
    public crear(subject:Subject):Observable<Subject>{
      return this.http.post<Subject>(this.baseEndpoint, subject,
        {headers:this.cabeceras});  
  }
  public editar(subject:Subject):Observable<Subject>{
    return this.http.put<Subject>(`${this.baseEndpoint}/${subject.id}`,subject,
    {headers:this.cabeceras});  
  }
  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }


  
}
