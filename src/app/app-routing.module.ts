import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from 'src/app/addtask/addtask.component';
import { ViewtaskComponent } from 'src/app/viewtask/viewtask.component';

const routes: Routes = [
  { path: 'addtask', component: AddtaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
