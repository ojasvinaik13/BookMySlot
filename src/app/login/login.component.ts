import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../login-status.service';

var mongoose =  require('mongoose');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private Auth: LoginStatusService, private router: Router) { }
  Users: any;
  
  ngOnInit(): void {

  }

  loginUser(event: any){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    if(this.Auth.checkLoggedIn(username, password)){
      this.router.navigate(['/search']);
    }
    else{
      this.Auth.logIn(username, password)
      if(!this.Auth.checkLoggedIn(username, password)){
        window.alert("Log in failed");
      }
      else{
        this.router.navigate(['/search']);
      }
    }
  }

  createUser(event: any){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#usernameS').value;
    const password = target.querySelector('#passwordS').value;
    this.Auth.create({ "email": username, "passwd": password, "reservations": []})
  }

  logoutUser(){
    window.alert("Logged Out successfully")
    this.Auth.logOut();
  }
}
