import { Routes } from "@angular/router";
import { EventslistComponent } from "./events/eventslist.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from "./errors/error404/error404.component";
import { EventRouteActivatorGuard } from "./events/event-details/event-route-activator.guard";
import { EventListResolverService } from "./events/event-list-resolver/event-list-resolver.service";
import { CreateSessionComponent } from "./events/event-details/create-session/create-session.component";
import { UserModule } from './user/user.module';


export const appRoutes:Routes=[
    { path: 'events/new' , component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events' , component: EventslistComponent, resolve: {events: EventListResolverService}},
    { path: 'events/:id' , component: EventDetailsComponent , canActivate: [EventRouteActivatorGuard] },
    { path: 'events/session/new' , component: CreateSessionComponent },
    { path: '404' , component: Error404Component    },
    { path: '' , redirectTo: 'events', pathMatch: 'full' },
    { path: 'user' , loadChildren: () => UserModule }
];