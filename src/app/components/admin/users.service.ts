
import { users } from './users';
import { IUsers } from './Iusers';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private users: users) { }

  userlist = this.users.userlist;

  data:any;





  getuserId(id: any) {
    var item = this.users.userlist.find(u=>u.id==id);

    return item;
  }

  getaddUser(body: any,id?:any) {


    if(id>-1){
      this.userlist[id].id=body.id;
      this.userlist[id].name.firstname = body.firstname;
      this.userlist[id].name.lastname = body.lastname;
      this.userlist[id].email = body.email;
      this.userlist[id].phone = body.phone;
      this.userlist[id].address = body.address;
      this.userlist[id].birthdate = body.birthdate;
      id=-1;

    }
    else{
      var Datauser = {
        id: this.userlist.length+1,
        name: {
          firstname: body.firstname,
          lastname: body.lastname,
        },
        birthdate: body.birthdate,
        email: body.email,
        phone: body.phone,
        address: body.address,

      }


      this.userlist.push(Datauser);

    }

  }


  GetUser() {
    return this.users.userlist;
  }

  DeleteUser(id:any){

   return this.users.userlist.splice(id,1);
  }






}
