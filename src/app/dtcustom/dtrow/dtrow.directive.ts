import {
  Directive,
  HostListener,
  ElementRef,
  AfterViewChecked,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  DoCheck
} from '@angular/core';

@Directive({
  selector: '[appDtrow]'
})
export class DtrowDirective implements AfterViewChecked, DoCheck {
  @HostListener('click') clickEvt(): any {
    //this.cdr.reattach();
    console.log(this.el);
    this.selectedValue.emit(this.el);
  }

  @Output() selectedValue: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    //this.cdr.detach();
  }
  ngDoCheck() {
    //console.log('Detach the CDR');
  }

}
