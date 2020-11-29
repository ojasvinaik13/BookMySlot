import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginComponent} from './login/login.component';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import {User} from "./user.model";

var mongoose = require('mongoose')
const baseUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})

export class LoginStatusService {
  loggedIn: Array<String>;
  User: User | undefined;

  constructor(private http: HttpClient) { 
    this.loggedIn = ["", ""]
    /*
    mongoose.connect('mongodb://127.0.0.1:27017/BookMySlot');

    var db = mongoose.connection;

    db.on('error',console.error.bind(console,'Connection error'));

    db.once('open',function(){
        console.log("Connection successful");
    });

    var UserSchema = mongoose.Schema({
      email: String,
      passwd: String,
      reservations: Array
    });

    this.Users = mongoose.model('Users', UserSchema);
    */
  }

  get(id: any) {
    id = <JSON>id;
    return this.http.get(baseUrl, id);
  }

  create(data: any) {
    data = <JSON>data;
    console.log(data)
    return this.http.post(baseUrl, data).subscribe();
  }


  checkLoggedIn(user: String, pwd: String){
    if(this.loggedIn[0] == user)
      return true
    return false
  }

  logIn(user: String, pwd: String){
    this.loggedIn[0] = user;
    console.log(user);
    this.get({ }).subscribe((data: any) => {
      if(data.email != user){
        console.log(data)
        return this.logOut();
      }
      else if(data.passwd == pwd){
        this.loggedIn[1] = pwd
        return;
      }
      else{
        return this.logOut();
      }
    })
  }

  logOut(){
    console.log("Logout");
    this.loggedIn[0] = "";
    this.loggedIn[1] = "";
  }
}