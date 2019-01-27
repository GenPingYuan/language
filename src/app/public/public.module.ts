import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LifeRecordComponent, AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent,IssueContentComponent } from 'src/app/components/index'
import { MaskTextDirective } from 'src/app/directives/mask-text.directive';

@NgModule({
  declarations: [LifeRecordComponent,
    AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent,IssueContentComponent,MaskTextDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LifeRecordComponent,
    AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent,IssueContentComponent,MaskTextDirective
  ]
})
export class PublicModule { }
