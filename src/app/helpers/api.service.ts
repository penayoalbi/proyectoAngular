import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api:String;
  constructor(private clienteHttp: HttpClient) {
    //this.api= 'https://apipenayo.herokuapp.com';
    this.api =  'http://localhost:666';

   }
datosGet(){
 return this.clienteHttp.get(this.api+'/').subscribe(Response =>{});
}
datosPost(){
  return this.clienteHttp.post(this.api+'/',{}).subscribe(Response =>{});
}
datosDelete(){
  return this.clienteHttp.delete(this.api+'/borrar',{}).subscribe(Response =>{});
}
datosUpdate(){
  return this.clienteHttp.put(this.api+'/modificar',{}).subscribe(Response =>{});
}
Login(usuario: Persona):Observable<Persona[]>{
  return <Observable<Persona[]>>this.clienteHttp.post(this.api+'/usuario/login',JSON.stringify(usuario));
}

}
