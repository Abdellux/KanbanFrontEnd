import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageKanbanComponent } from './manage-kanban/manage-kanban.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'login', component:LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {path: 'kanban', component: ManageKanbanComponent},
  { path: "**", redirectTo: "home/login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
