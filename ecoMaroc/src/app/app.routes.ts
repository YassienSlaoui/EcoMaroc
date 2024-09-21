import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent }, // Route for login page
    {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard], // Guard for authenticated routes
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'content', component: ContentComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      ]
    },
    { path: '**', redirectTo: '' }
];
