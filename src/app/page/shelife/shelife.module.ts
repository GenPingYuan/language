import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelifeRoutingModule } from './shelife-routing.module';
import { ShelifeComponent } from './shelife.component';
import { PublicModule } from 'src/app/public/public.module';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { CoverComponent } from './cover/cover.component'

@NgModule({
  declarations: [ShelifeComponent, HomeComponent, AboutComponent, CoverComponent],
  imports: [
    CommonModule,
    ShelifeRoutingModule,
    PublicModule
  ]
})
export class ShelifeModule { }
