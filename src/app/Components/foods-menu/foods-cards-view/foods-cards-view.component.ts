import { Component, Input } from '@angular/core';
import { ItemCardComponent } from '../../../Shared/item-card/item-card.component';
import { Router } from '@angular/router';
import { ItemsService } from '../../../Core/Services/items.service';
import { IItem } from '../../../Core/Interfaces/item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foods-cards-view',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './foods-cards-view.component.html',
  styleUrl: './foods-cards-view.component.scss',
})
export class FoodsCardsViewComponent {
  public items!: IItem[];
  @Input() filteredItems!: any[];
  constructor(
    private readonly router: Router,
    private readonly itemService: ItemsService
  ) {}
  ngOnInit() {
    this.itemService.getItems().subscribe({
      next: (value) => {
        this.itemService.searchItems.subscribe((filterdArray) => {
          if (!filterdArray || filterdArray.length == 0) {
            this.items = [...value];
          } else {
            this.items = [...filterdArray];
          }
        });
      },
    });
  }
}
