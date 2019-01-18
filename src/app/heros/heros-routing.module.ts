import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosListComponent } from './heros-list/heros-list.component';
import { HerosDetailComponent } from './heros-detail/heros-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HerosListComponent },
      { path: ':id', component: HerosDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
