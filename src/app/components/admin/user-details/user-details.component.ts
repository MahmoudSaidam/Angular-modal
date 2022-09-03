import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  userdetails:any;
  constructor(private UsersService:UsersService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {


    const routeParams = this.route.snapshot.paramMap;
    const Idusers = Number(routeParams.get('id'));

    this.userdetails =  this.UsersService.getuserId(Idusers);

  }


  BackToHome(){
    this.router.navigate(['users']);
  }

}
