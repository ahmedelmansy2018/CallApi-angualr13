import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  constructor(elementRef:ElementRef) { 
    elementRef.nativeElement.style.border="2px solid red"
  }

}
