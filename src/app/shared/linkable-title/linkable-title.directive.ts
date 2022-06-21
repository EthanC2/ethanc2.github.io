import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLinkableTitle]'
})
export class LinkableTitleDirective {

  constructor(private el: ElementRef) {
    //const id = this.el.nativeElement.innerText.toLowerCase().replace('/\s/g', '-'); 
    //el.nativeElement.style.backgroundColor = 'cyan';
  }
}
