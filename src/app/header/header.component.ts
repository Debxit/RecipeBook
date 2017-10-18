import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedFeature = new EventEmitter<string>();

  onSelected(feature: string) {
    this.selectedFeature.emit(feature);
  }
}
