import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../login-status.service';

@Component({
  selector: 'app-search-store',
  templateUrl: './search-store.component.html',
  styleUrls: ['./search-store.component.css']
})
export class SearchStoreComponent implements OnInit {
  title = "Search for Stores";
  searchText: any;
  stores = [
    { id: 11, name: "Shriram General Stores", rating: "5" },
    { id: 12, name: "Sahakari Bhandar", rating: "4" },
    { id: 13, name: "Trendy Taste", rating: "1" },
    { id: 14, name: "Society Stores", rating: "5" },
    { id: 15, name: "Reliance Fresh", rating: "4.3" },
    { id: 16, name: "D-Mart", rating: "3" },
    { id: 17, name: "All-In-One Kirana Store", rating: "4.7" },
    { id: 18, name: "Royal Store", rating: "5" },
    { id: 19, name: "Food Mart", rating: "3" },
    { id: 20, name: "Ganesh Stores", rating: "4.9" }
  ];
  
  constructor(private Auth: LoginStatusService, private router: Router) { 
  }
  logoutUser(){
    this.Auth.logOut();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  
  }
  
}
