import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Generic } from '../models/generic';
import { Student } from '../models/student';


export abstract class CommonService <E extends Generic> {
protected baseEndpoint:string;

protected cabeceras:HttpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(protected http:HttpClient) { }
  
  public listar():Observable<E[]>{
    return this.http.get<E[]>(this.baseEndpoint);
  }
  public ver(id: number):Observable<E>{
    return this.http.get<E>(`${this.baseEndpoint}/${id}`);
  }
  public crear(e:E):Observable<E>{
    return this.http.post<E>(this.baseEndpoint, e,
      {headers:this.cabeceras});  
}
public editar(e:E):Observable<E>{
  return this.http.put<E>(`${this.baseEndpoint}/${e.idStudent}`,e,
  {headers:this.cabeceras});  
}
public eliminar(id:number):Observable<void>{
  return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
}
}
