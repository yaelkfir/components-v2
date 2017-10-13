import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer} from '@angular/core';
import {Http} from '@angular/http';

@Directive({
  selector: '[appBgImg]',
})
export class BgImgDirective implements OnInit {
  @Output() imgDone: EventEmitter<boolean> = new EventEmitter();
  @Input() img: string;
  src: string;

  constructor(public elRef: ElementRef, public http: Http) {
  }


  ngOnInit() {

    this.src =  `url(https://image.tmdb.org/t/p/w300${this.img})`;
    this.elRef.nativeElement.style.backgroundImage = this.src;
    this.elRef.nativeElement.style.backgroundSize = 'cover';
    this.imgDone.emit(null);
  }
}
