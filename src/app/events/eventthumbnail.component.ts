import { Component, OnInit, Input} from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-eventthumbnail',
  templateUrl: './eventthumbnail.component.html',
  styleUrls: ['./eventthumbnail.component.css']
})
export class EventthumbnailComponent implements OnInit {
  @Input() event:IEvent;
  constructor() { 

  }

  ngOnInit() {
  }

  getStartTimeOfClass(){
    const isEarly=this.event && this.event.time=='8:00 am';
    const isLater=this.event && this.event.time=='10:00 am';
    if(isEarly){
      return {green: isEarly}
    }else if(isLater){
      return {orange: isLater}
    }else{
      return {blue:this.event}
    }
  }

  getStartTimeStyle():any{
    const isEarly=this.event && this.event.time=='8:00 am';
    if(isEarly){
      return {'font-weight' : 'bold'}
    }
    return {}
  }
  
}
