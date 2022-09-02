
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '../users';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  userlist: any;
  userdetails: any;
  index: any;
  submitted: boolean = false

  constructor(private UsersService: UsersService,
    private router: Router,
    private route: ActivatedRoute, private users: users) { }


  Formuser = new FormGroup({
    id: new FormControl(0),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {


    this.userlist = this.UsersService.GetUser();

    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('id'));

    this.userdetails = this.UsersService.getuserId(userIdFromRoute);

    this.index = this.UsersService.userlist.indexOf(this.userdetails);


    if (this.index > -1) {
      this.setValue();
    }


  }

  setValue() {
    this.Formuser.get("id")?.setValue(this.userdetails.id);
    this.Formuser.get("firstname")?.setValue(this.userdetails.name.firstname);
    this.Formuser.get("lastname")?.setValue(this.userdetails.name.lastname);
    this.Formuser.get("birthdate")?.setValue(this.userdetails.birthdate);
    this.Formuser.get("email")?.setValue(this.userdetails.email);
    this.Formuser.get("phone")?.setValue(this.userdetails.phone);
    this.Formuser.get("address")?.setValue(this.userdetails.address);
  }

  onsubmit() {

    if (this.Formuser.valid) {
      const body = {
        ...this.Formuser.value,

      }
      this.UsersService.getaddUser(body, this.index);

      this.Formuser.reset();
      this.router.navigate(['users']);
    }
    else {
      this.submitted = true;
    }


  }
  BackToHome() {
    this.router.navigate(['users']);
  }



}
