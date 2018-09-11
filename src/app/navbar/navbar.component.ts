import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //searchTerm:string='';
  //foundSessions: ISession[];


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  searchSession(searchTerm){

  }

}
