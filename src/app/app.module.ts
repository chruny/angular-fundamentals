import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AppComponent,
  EventslistComponent,
  EventthumbnailComponent,
  NavbarComponent,
  EventService,
  TOASTR_TOKEN,
  Toastr,
  EventDetailsComponent,
  appRoutes,
  CreateEventComponent,
  Error404Component,
  EventRouteActivatorGuard,
  EventListResolverService,
  DurationPipe,
  CollapsibleWellComponent,
  CreateSessionComponent,
  SessionListComponent


} from './index';
import { RouterModule} from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SessionListComponent } from './events/event-details/session-list/session-list.component';
//import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
//import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';

declare let toastr:Toastr;

@NgModule({
  declarations: [
    AppComponent,
    EventslistComponent,
    EventthumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    CreateSessionComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivatorGuard,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
     return window.confirm('Your data was not saved. Do you realy want to leave page ?');
  }
  return true;
}
