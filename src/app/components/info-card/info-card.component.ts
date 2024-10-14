import { Component, Input, input } from '@angular/core';

interface CardDetail {
  text: string;
  count: number;
}
@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  @Input() cardDetail: CardDetail = { text: '', count: 0 };
}
