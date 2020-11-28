import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';


const routes: Routes = [
  { path: 'slots', component: SlotsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
