import { UsersComponent } from './../users/users.component';
import { UsersService } from './../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';



@Component({
  selector: 'app-modeladd',
  templateUrl: './modeladd.component.html',
  styleUrls: ['./modeladd.component.css']
})
export class ModeladdComponent implements OnInit  {



  submitted: boolean = false
  userlist: any
  index: any
  userdetails: any
  staustmodal:boolean=false;
  exampleModal:string='';
  @Output() onsubmitedform: EventEmitter<any> = new EventEmitter<any>(null);
  constructor(private UsersService: UsersService) { }


  Formusermodel = new FormGroup({
    id: new FormControl(0),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {


  }

  onshowmodel() {
    this.onsubmitedform.emit();
    this.staustmodal=true
    this.exampleModal='#exampleModal';
 console.log("CLiICL");

  }










  LodeidEdit(e:any){
    console.log("IDRRR",e);
    this.userlist = this.UsersService.GetUser();
    this.userdetails = this.UsersService.getuserId(e);

    this.index = this.userlist.indexOf(this.userdetails);

    if (this.index > -1) {


      this.setValue();
    }

    ;

  }

  setValue() {
    console.log("update",this.userdetails);
    this.Formusermodel.get("firstname")?.setValue(this.userdetails.name.firstname);
    this.Formusermodel.get("lastname")?.setValue(this.userdetails.name.lastname);
    this.Formusermodel.get("birthdate")?.setValue(this.userdetails.birthdate);
    this.Formusermodel.get("email")?.setValue(this.userdetails.email);
    this.Formusermodel.get("phone")?.setValue(this.userdetails.phone);
    this.Formusermodel.get("address")?.setValue(this.userdetails.address);
  }

  onsubmit() {
    if (this.Formusermodel.valid) {
      const body = {
        ...this.Formusermodel.value,

      }
      this.UsersService.getaddUser(body, this.index);

      this.Formusermodel.reset();
      console.log("RR", body);

    }
    else {
      this.submitted = true;
    }
  }

  onshowModal(){

   return  this.exampleModal='#exampleModal';

  }


}
