import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { SearchStoreComponent } from './search-store/search-store.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { BookedComponent } from './booked/booked.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'search',component:SearchStoreComponent},
  {path:'store/:id',component:StoreComponent},
  {path:'booked',component:BookedComponent}
];
@NgModule({
  imports:      [BrowserModule, FormsModule, HttpClientModule, Ng2SearchPipeModule,RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), NgbModule ],
  declarations: [ AppComponent, StoreComponent, SearchStoreComponent, LoginComponent, BookedComponent ],
  providers:[],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
