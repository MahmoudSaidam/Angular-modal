import { ModeladdComponent } from './../modeladd/modeladd.component';
import { IUsers } from './../Iusers';
import { UsersService } from './../users.service';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {


  @ViewChild(ModeladdComponent) modelcontent!:ModeladdComponent;

  showmodel:boolean=true;
  showexampleModal:string='#exampleModal';
   datatable:any;

  constructor(private UsersService:UsersService,
    private router:Router,
    private route:ActivatedRoute) { }



  ngOnInit(): void {

  this.datatable=this.UsersService.GetUser();

  }



  showuser(id:any){
  this.UsersService.getuserId(id);

  }
  addUser(){
    this.router.navigate(['adduser']);
  }

  removeUser(id:any){
     this.UsersService.DeleteUser(id);

  }

  onshow(){
  this.showmodel=true;
  }


  oneditModal(id:any){
    this.modelcontent.onshowModal();
    this.modelcontent.LodeidEdit(id);
   this.showexampleModal='#exampleModal';

   console.log("Stauts",this.showexampleModal);
  }

  oncreate(){

    this.modelcontent.onshowmodel();

  }



}
