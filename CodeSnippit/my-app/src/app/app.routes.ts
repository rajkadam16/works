import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViweSnippetComponent } from './components/viwe-snippet/viwe-snippet.component';
import { DefferDemoComponent } from './components/deffer-demo/deffer-demo.component';

export const routes: Routes = [
    {path:'login',
    component:LoginComponent},
    {path:'sigup',
    component:SignupComponent},
    {path:'demo',
    component:DefferDemoComponent},
    {path:'create',
    component:CreateBinComponent,canActivate:[authGuard]},
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(mod => mod.AboutComponent) },
    { path:"",component:HomeComponent},
    { path:"snippet/",component:ViweSnippetComponent},
    { path:"**",
    component:NotFound404Component }
];
