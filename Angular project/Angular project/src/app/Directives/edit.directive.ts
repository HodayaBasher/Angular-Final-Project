import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEdit]'
})
export class EditDirective implements OnInit {
  @Input() isEdit: boolean

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    if (this.isEdit) {
      this.element.nativeElement.style.backgroundColor = "rgb(227, 240, 249)"
      // this.element.nativeElement.diabled="true"
    }

    if (!this.isEdit)
      this.element.nativeElement.style.backgroundColor = "lightBlue"
    // this.element.nativeElement.diabled="false"
  }
  @HostListener('click') f() {
    if (this.isEdit) {
      this.element.nativeElement.style.backgroundColor = "rgb(227, 240, 249)"
      // this.element.nativeElement.diabled="true"
    }

    if (!this.isEdit)
      this.element.nativeElement.style.backgroundColor = "lightBlue"
    // this.element.nativeElement.diabled="false"
  }


}
