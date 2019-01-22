import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelifeRoutingModule } from './shelife-routing.module';
import { ShelifeComponent } from './shelife.component';
import { LifeRecordComponent, AvaterComponent, IssueTextComponent } from 'src/app/components/index'

@NgModule({
  declarations: [ShelifeComponent, LifeRecordComponent, AvaterComponent, IssueTextComponent],
  imports: [
    CommonModule,
    ShelifeRoutingModule
  ]
})
export class ShelifeModule { }
