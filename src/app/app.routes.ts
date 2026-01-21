import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'daily-admit',
        loadComponent: () => import('./features/daily-admit/daily-admit.component').then(m => m.DailyAdmitComponent)
      },
      {
        path: 'signature',
        loadComponent: () => import('./features/signature/signature.component').then(m => m.SignatureComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
