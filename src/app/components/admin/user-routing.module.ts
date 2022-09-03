
import { UserAddComponent } from './../admin/user-add/user-add.component';
import { UserDetailsComponent } from './../admin/user-details/user-details.component';
import { UsersComponent } from './../admin/users/users.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';


const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'UserDetails/:id',
    component:UserDetailsComponent
  },
  {
    path:'adduser',
    component:UserAddComponent
  },
  {
    path:'edituser/:id',
    component:UserAddComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
