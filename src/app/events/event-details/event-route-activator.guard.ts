import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const eventExists = !!this.eventService.getEvent(+next.params['id']);
      
      if(!eventExists){
        this.router.navigate(['/404']);
      }
      return eventExists;
  }

  constructor(private eventService: EventService, private router:Router){
  }
}
