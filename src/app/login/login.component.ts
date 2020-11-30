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
  
  ngOnInit(): void {

  }

  loginUser(event: any){
    event.preventDefault();
    var target = event.target;
    var username = target.querySelector('#username').value;
    var password = target.querySelector('#password').value;
    this.Auth.logIn(username, password).subscribe((status) => {
      console.log(status)
      if(status == false){
        window.alert("Log in failed");
      }
      else{
        this.router.navigate(['/search']);
      }
    })
    
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
