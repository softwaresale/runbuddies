import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { SignupFlowComponent } from './auth/signup-flow/signup-flow.component';

const routes: Routes = [
  {
    path: 'start',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'buddies',
    loadChildren: () => import('./buddies/buddies.module').then(m => m.BuddiesModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupFlowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
