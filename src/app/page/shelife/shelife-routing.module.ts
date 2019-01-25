import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelifeComponent } from './shelife.component';
import { HomeComponent } from './home/home/home.component'
import { AboutComponent } from './about/about/about.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: ShelifeComponent,
        children: [
          {path: '',component: HomeComponent},
          {path: 'about',component: AboutComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelifeRoutingModule { }
