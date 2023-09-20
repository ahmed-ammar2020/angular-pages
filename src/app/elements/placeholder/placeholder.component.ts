import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  // implementing default values to them
  @Input() lines: number = 3;
  @Input() headerShown: boolean = true;
}
