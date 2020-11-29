import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
    return this.http.get(baseUrl + "/" + id);
  }

  create(data: any) {
    data = <JSON>data;
    console.log(data)
    return this.http.post(baseUrl, data).subscribe();
  }


  checkLoggedIn(user: String, pwd: String){
    console.log(this.loggedIn)
    if(this.loggedIn[0] == user)
      return true
    return false
  }

  logIn(user: String, pwd: String){
    let s: boolean;
    var subject = new Subject<boolean>();
    this.get(user).subscribe((data: any) => {
      if(data == null){
        console.log("null")
        s = false;
      }
      if(data[0].email != user){
        console.log(data[0]['email'])
        s = false;
      }
      else if(data[0].passwd == pwd){
        console.log("login")
        this.loggedIn[0] = user;
        this.loggedIn[1] = pwd;
        s = true;
      }
      else{
        console.log("incorrect")
        s = false;
      }

      subject.next(s);
    })

    return subject.asObservable()
  }

  logOut(){
    console.log("Logout");
    this.loggedIn[0] = "";
    this.loggedIn[1] = "";

  }
}