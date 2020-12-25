import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'login', component:LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
