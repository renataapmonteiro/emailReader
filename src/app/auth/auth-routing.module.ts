import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingUpComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';


const routes: Routes = [
  {path: 'singUp', component: SingUpComponent},
  {path: '', component: SingInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
