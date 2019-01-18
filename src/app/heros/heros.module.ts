import { NgModule } from '@angular/core';
import { HerosRoutingModule } from './heros-routing.module';
import { HerosListComponent } from './heros-list/heros-list.component';
import { HerosDetailComponent } from './heros-detail/heros-detail.component';
import { PublicModule } from '../public.module'
@NgModule({
  declarations: [HerosListComponent, HerosDetailComponent],
  imports: [
    PublicModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
