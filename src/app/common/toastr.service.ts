import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';
declare let toastr:any;

export let TOASTR_TOKEN= new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success(msg: string, title?: string):void;
  info(msg: string, title?: string);
  warning(msg: string, title?: string);
  error(msg: string, title?: string);

}
/*
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(message: string,title?: string){
    toastr.success(message,title);
  }

  warning(message: string, title?:string){
    toastr.warning(message,title);
  }

  info(message:string,title?:string){
    toastr.info(message,title);
  }

  error(message:string,title?:string){
    toastr.error(message,title);
  }
}*/
