import {
  Directive,
  ElementRef,
  inject,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() color = 'red';

  constructor(private el: ElementRef) {}
  //  elemento = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener('mousedown') onMouseDown() {
    console.log('Mouse down!');
  }
  // "mousedown"

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
