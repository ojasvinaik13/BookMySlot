import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeId:string | undefined;
  storeDetails:any;
  currentRate:any;
  days = [
    {name:"Monday",slots:[{time:'9:00AM',booked:true},{time:'10:00AM',booked:false},{time:'11:00AM',booked:true},{time:'12:00PM',booked:false},{time:'1:00PM',booked:false},{time:'2:00PM',booked:true},{time:'3:00PM',booked:false},{time:'4:00PM',booked:true}]},
    {name:"Tuesday",slots:[{time:'9:00AM',booked:false},{time:'10:00AM',booked:false},{time:'11:00AM',booked:true},{time:'12:00PM',booked:false},{time:'1:00PM',booked:false},{time:'2:00PM',booked:true},{time:'3:00PM',booked:false},{time:'4:00PM',booked:true}]},
    {name:"Wednesday",slots:[{time:'9:00AM',booked:true},{time:'10:00AM',booked:false},{time:'11:00AM',booked:true},{time:'12:00PM',booked:false},{time:'1:00PM',booked:false},{time:'2:00PM',booked:true},{time:'3:00PM',booked:false},{time:'4:00PM',booked:true}]},
    {name:"Thursday",slots:[{time:'9:00AM',booked:true},{time:'10:00AM',booked:false},{time:'11:00AM',booked:true},{time:'12:00PM',booked:false},{time:'1:00PM',booked:false},{time:'2:00PM',booked:true},{time:'3:00PM',booked:false},{time:'4:00PM',booked:true}]},
    {name:"Friday",slots:[{time:'9:00AM',booked:true},{time:'10:00AM',booked:false},{time:'11:00AM',booked:true},{time:'12:00PM',booked:false},{time:'1:00PM',booked:false},{time:'2:00PM',booked:true},{time:'3:00PM',booked:false},{time:'4:00PM',booked:true}]},
    {name:"Saturday",slots:[{time:'9:00AM',booked:true},{time:'10:00AM',booked:false},{time:'11:00AM',booked:true},{time:'12:00PM',booked:false},{time:'1:00PM',booked:false},{time:'2:00PM',booked:true},{time:'3:00PM',booked:false},{time:'4:00PM',booked:true}]},
  ]
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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('id')!;
    // console.log(this.storeId);
    let ind = this.stores.map(e => e.id).indexOf(Number(this.storeId));
    this.storeDetails=this.stores[ind];
    this.currentRate=this.storeDetails.rating;
    // console.log(this.storeDetails);
  }

}
