import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { InitialsPipe } from './pipes/initials.pipe';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactCounterComponent } from './components/contact-counter/contact-counter.component';
import { ContactDeleteComponent } from './components/contact-delete/contact-delete.component';

import {HttpClientModule} from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact-list',
    component:ContactListComponent
  },
  {
    path:'add-contact',
    component:AddContactComponent
  },
  {
    path:'edit-contact',
    component:EditContactComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactListComponent,
    InitialsPipe,
    AddContactComponent,
    EditContactComponent,
    ContactCounterComponent,
    ContactDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }