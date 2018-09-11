import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;


  constructor() { }

  loginUser(login: string,password: string){
    this.currentUser={
      id: 1,
      firstName: 'Martin',
      lastName: 'Kranec',
      userName: login
    }
  }

  isAuthentificated(){
    return !!this.currentUser;
  }

  updateCurrentUser( firstName:string, lastName:string ){
    this.currentUser.userName=firstName;
    this.currentUser.lastName=lastName;
  }
}
