import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  // after displaying the component, append it
  ngOnInit() {
    document.body.append(this.elementRef.nativeElement);
  }

  // when navigating away to another route
  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
  }

  onClose() {
    this.close.emit();
  }
}
