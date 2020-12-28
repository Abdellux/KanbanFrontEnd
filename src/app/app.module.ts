import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component'
import { AlertMessageComponent } from "./alert-message/alert-message.component";
import { RegisterComponent } from './home/register/register.component';
import { ManageKanbanComponent } from './manage-kanban/manage-kanban.component';
import { AddKanbanComponent } from './manage-kanban/add-kanban/add-kanban.component';
import { KanbanItemComponent } from './manage-kanban/kanban-item/kanban-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertMessageComponent,
    RegisterComponent,
    HomeComponent,
    ManageKanbanComponent,
    AddKanbanComponent,
    KanbanItemComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
