import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private clienteHttp: HttpClient) { }
datosGet(){
 return this.clienteHttp.get('http://localhost/ApiProyecto/').subscribe(Response =>{});
}
datosPost(){
  return this.clienteHttp.post('http://localhost/ApiProyecto/',{}).subscribe(Response =>{});
}
datosDelete(){
  return this.clienteHttp.delete('http://localhost/ApiProyecto/',{}).subscribe(Response =>{});
}
datosUpdate(){
  return this.clienteHttp.put('http://localhost/ApiProyecto/',{}).subscribe(Response =>{});
}

}
