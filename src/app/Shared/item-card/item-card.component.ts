import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  @Input() itemName!: string;
  @Input() itemImageSrc!: string;
  @Input() itemCategory!: string;
  @Input() itemPrice!: string;
  @Input() itemStatus!: string;
  @Input() itemHasOffer!: string;
}
