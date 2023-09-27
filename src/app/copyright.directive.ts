import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEL: HTMLElement = el.nativeElement;
    targetEL.classList.add('copyright');
    targetEL.textContent = `copyright ©${currentYear} ALL Rights Reserved`;
  }

}
