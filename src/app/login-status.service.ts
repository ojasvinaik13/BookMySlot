import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  loggedIn: Array<String>;
  constructor() { 
    this.loggedIn = ["", ""]
  }

  checkLoggedIn(user: String, pwd: String){
    if(this.loggedIn[0] == user)
      return true
    return false
  }

  logIn(user: String, pwd: String){
    this.loggedIn[0] = user;
    this.loggedIn[1] = pwd;
  }

  logOut(){
    console.log("Logout");
    this.loggedIn[0] = "";
    this.loggedIn[1] = "";
  }
}
