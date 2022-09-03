
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserRoutingModule } from './user-routing.module';
import { ModeladdComponent } from './modeladd/modeladd.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserAddComponent,
    ModeladdComponent,


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,

  ]
})
export class UserModule { }
