import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineListComponent } from './engine-list/engine-list.component';
import { EngineDetailComponent } from './engine-detail/engine-detail.component';
import { EngineGuard } from './engine.guard'
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: EngineListComponent,
        children: [
          {
            path: ':id',
            component: EngineDetailComponent,
            canDeactivate: [EngineGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineRoutingModule { }
