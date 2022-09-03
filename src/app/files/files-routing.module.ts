
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { FilesComponent } from './file/files.component';


const routes: Routes = [
{
  path:'',
  component:FilesComponent
},
{
  path:'**',
  component:NotfoundComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
