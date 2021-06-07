import { ClubComponent } from './club/club.component';
import { StoreComponent } from './store/store.component';
import { MotorsportComponent } from './motorsport/motorsport.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'motorsport', component: MotorsportComponent },
    { path: 'store', component: StoreComponent },
    { path: 'club', component: ClubComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);