import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './Home/home/home.component';
import { UserModule } from './components/admin/user.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },

  {
    path: 'users',
    loadChildren: () => import('./components/admin/user.module').then(m => m.UserModule)
  },
  {
    path: 'files',
    loadChildren: () => import('./files/files.module').then(m => m.FilesModule)
  },
{
  path:'**',
  component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
