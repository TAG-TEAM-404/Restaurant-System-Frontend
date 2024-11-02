import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
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
  @Input() itemQuantity!: string | any;
}
