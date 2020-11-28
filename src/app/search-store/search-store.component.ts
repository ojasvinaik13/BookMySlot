import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    var mongoose =  require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/BookMySlot');

    var db = mongoose.connection;

    db.on('error',console.error.bind(console,'Connection error'));

    db.once('open',function(){
        console.log("Connection successful");
    });

    var ShopSchema = mongoose.Schema({
        shop_id: Number,
        name: String,
        slot_limit: String,
        reserved_slots: Array
    });

    var Shops = mongoose.model('Shop', ShopSchema);

    

  }
}
