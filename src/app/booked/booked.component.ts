import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../login-status.service';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {
  logoutUser(){
    this.Auth.logOut();
    this.router.navigate(['/']);
  }
  constructor(private Auth: LoginStatusService, private router: Router) { 
  }

  ngOnInit(): void {
  }

}
