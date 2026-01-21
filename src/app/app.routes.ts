import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AuthGuard } from './core/guards/auth.guard';
=======
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
<<<<<<< HEAD
  },
  {
    path: '',
   
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
=======
    
  },
  {
    path: '',
    // Layout component shared folder a thakbe
>>>>>>> 896cf8056082808b4afb3b2f31f34641e4d4d65d
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