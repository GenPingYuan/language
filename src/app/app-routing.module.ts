import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path: 'heros',loadChildren: './heros/heros.module#HerosModule'},
  {path: 'engine',loadChildren: './engine/engine.module#EngineModule'},
  {path: '',redirectTo: 'heros',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
