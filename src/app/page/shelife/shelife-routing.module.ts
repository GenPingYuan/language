import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelifeComponent } from './shelife.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ShelifeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelifeRoutingModule { }
