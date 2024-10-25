import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FoodsCardsViewComponent } from './foods-cards-view/foods-cards-view.component';
import { FoodsTableViewComponent } from './foods-table-view/foods-table-view.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-foods-menu',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FoodsCardsViewComponent,
    FoodsTableViewComponent,
    RadioButtonModule,
    FormsModule,
    CommonModule,
    DividerModule
  ],
  templateUrl: './foods-menu.component.html',
  styleUrl: './foods-menu.component.scss',
})
export class FoodsMenuComponent {
  public itemsView!: string;
}
