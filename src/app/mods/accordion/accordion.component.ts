import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() accords: any;
  openedIndex = 0;

  toggleAccord(index: number) {
    if (index === this.openedIndex) {
      this.openedIndex = -1;
    } else {
      this.openedIndex = index;
    }
  }
}
