import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { SearchStoreComponent } from './search-store/search-store.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'search',component:SearchStoreComponent}
];
@NgModule({
  imports:      [BrowserModule, FormsModule, Ng2SearchPipeModule,RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  declarations: [ AppComponent, StoreComponent, SearchStoreComponent, LoginComponent ],
  providers:[],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
