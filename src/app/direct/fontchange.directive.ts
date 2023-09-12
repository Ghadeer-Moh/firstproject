import { Directive , ElementRef } from '@angular/core';
import {TmplAstHoverDeferredTrigger} from "@angular/compiler";

@Directive({
  selector: '[appFontchange]'
})
export class FontchangeDirective {

  constructor(private  EF:ElementRef) {
    this.EF.nativeElement.style.color="blue";
    this.EF.nativeElement.style.fontSize="10px";

  }

}
