import { Component } from '@angular/core';
import { ItemCardComponent } from '../../../Shared/item-card/item-card.component';

@Component({
  selector: 'app-foods-cards-view',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './foods-cards-view.component.html',
  styleUrl: './foods-cards-view.component.scss',
})
export class FoodsCardsViewComponent {}
