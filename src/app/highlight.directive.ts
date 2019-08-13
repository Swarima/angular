import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public ele:ElementRef) { }

  changeColor(color:string)
  {
    this.ele.nativeElement.style.backgroundColor=color;
  }
  @HostListener('mouseenter')
  onMouseEnter()
  {
    this.changeColor('pink')
  }

  @HostListener('mouseleave')
  onMouseLeave()
    {
      this.changeColor(null);
    }
}
