import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

//takto vyzera cesta
//user/profile
export const userRoutes=[
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
];