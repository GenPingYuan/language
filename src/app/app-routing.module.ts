import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', loadChildren: 'src/app/page/home/home.module#HomeModule' },
  { path: 'sheLife', loadChildren: 'src/app/page/shelife/shelife.module#ShelifeModule' },
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
