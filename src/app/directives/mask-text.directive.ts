import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appMaskText]'
})
export class MaskTextDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
      // console.log(templateRef);
    }

  @Input() set appMaskText(text: string) {
    console.log(this.templateRef);
    console.log(this.viewContainer);
    let maskDiv = document.createElement("div");
    maskDiv.setAttribute("class","maskText");
    
    maskDiv.innerText = text;
    this.templateRef.createEmbeddedView(maskDiv);
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
