import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event:any;
  isDirty:boolean=true;
  constructor(private router:Router,private eventService: EventService) { }
  


  ngOnInit() {
    
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty=true;
    this.router.navigate(['events']);
  }
  
  cancel(){
    this.router.navigate(['/events']);
  }
}
