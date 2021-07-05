import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

//rutas
import { ErroresComponent } from './components/errores/errores.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './auth.guard';

//components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/tasks', 
    pathMatch: 'full'
  }, 
  {
    path: 'tasks', 
    component: TasksComponent
  }, 
  {
    path: 'private', 
    component: PrivateTasksComponent, 
    canActivate: [AuthGuard]
  }, 
  {
    path: 'signup', 
    component: SignupComponent
  }, 
  {
    path: 'signin', 
    component: SigninComponent
  }
]



/*
const routes: Routes = [
    {
      path: '',
      redirectTo: '/registro',
      pathMatch: 'full'
    },

    {
      path: 'registro',
      component: RegistrosComponent,
    },

    {
      path: 'login',
      component: LoginComponent,
    },

    {
      path: 'inicio',
      component: InicioComponent,
      canActivate: [AuthGuard]
    },

    {
      path: '**',
      component: ErroresComponent,
    },
  ];
*/

//const routes: Routes = []; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
  
