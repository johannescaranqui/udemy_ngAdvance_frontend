import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphics1', component: Graphics1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NoPageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes,{useHash: true});
