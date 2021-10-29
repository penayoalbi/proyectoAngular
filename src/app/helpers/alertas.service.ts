import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toast: ToastrService) {}

  alertSuccess(texto:string, titulo:string){
    this.toast.success(texto, titulo);
  }

  alertError(texto:string, titulo: string){
    this.toast.error(texto, titulo);
  }

}
