import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingUpComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingOutComponent } from './sing-out/sing-out.component';


const routes: Routes = [
  {path: 'singout', component:  SingOutComponent},
  {path: 'singup', component: SingUpComponent},
  {path: '', component: SingInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
