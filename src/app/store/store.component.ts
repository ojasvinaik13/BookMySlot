import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private route: ActivatedRoute, private modalService:NgbModal) { }
  openModal(name:string, time:string, day:string)
  {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.time = time;
    modalRef.componentInstance.day = day;
  }
  public bookSlot(time:string,day:string)
  {
    let ind = this.days.map(e => e.name).indexOf(day);
    let index = this.days[ind].slots.map(e => e.time).indexOf(time);
    this.days[ind].slots[index].booked=true;  
  }
  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('id')!;
    // console.log(this.storeId);
    let ind = this.stores.map(e => e.id).indexOf(Number(this.storeId));
    this.storeDetails=this.stores[ind];
    this.currentRate=this.storeDetails.rating;
    // console.log(this.storeDetails);
  }

}

@Component({
  selector:'ngbd-modal-content',
  providers:[StoreComponent],
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Would you like to book a slot in {{name}} at {{time}} on {{day}}?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="bookS(time,day)">Yes,Confirm</button>
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})
export class NgbdModalContent{
  
  @Input() name: any;
  @Input() time: any;
  @Input() day: any;
  
  constructor(private router: Router,public activeModal: NgbActiveModal, private comp:StoreComponent){}
  public bookS(time:string,day:string):void
  {
    this.comp.bookSlot(time,day);
    this.activeModal.close('Close click');
    this.router.navigate(['booked']);
  }
}
