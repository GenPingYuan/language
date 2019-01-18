import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineRoutingModule } from './engine-routing.module';
import { EngineListComponent } from './engine-list/engine-list.component';
import { EngineDetailComponent } from './engine-detail/engine-detail.component';
import { PublicModule } from '../public.module'

@NgModule({
  declarations: [EngineListComponent, EngineDetailComponent],
  imports: [
    CommonModule,
    PublicModule,
    EngineRoutingModule
  ]
})
export class EngineModule { }
