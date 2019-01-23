import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeRecordComponent, AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent } from 'src/app/components/index'

@NgModule({
  declarations: [LifeRecordComponent,
    AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent, LifeMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [LifeRecordComponent, AvaterComponent, IssueTextComponent, UserComponent, ImgTextComponent,LifeMenuComponent]
})
export class PublicComponentModule { }
