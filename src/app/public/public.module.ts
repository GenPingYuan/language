import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LifeRecordComponent, AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent } from 'src/app/components/index'

@NgModule({
  declarations: [LifeRecordComponent,
    AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LifeRecordComponent,
    AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent
  ]
})
export class PublicModule { }
