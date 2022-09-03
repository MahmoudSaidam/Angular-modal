import { UsersService } from './../../components/admin/users.service';

import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';



@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  datatable:any
  constructor( private FilesService:FilesService ) { }



  ngOnInit(): void {

 this.datatable=this.FilesService.GetFiles();
  }

}
