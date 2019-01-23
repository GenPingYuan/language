import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelifeRoutingModule } from './shelife-routing.module';
import { ShelifeComponent } from './shelife.component';
import { PublicComponentModule } from 'src/app/public/public-component.module';

@NgModule({
  declarations: [ShelifeComponent],
  imports: [
    CommonModule,
    ShelifeRoutingModule,
    PublicComponentModule
  ]
})
export class ShelifeModule { }
