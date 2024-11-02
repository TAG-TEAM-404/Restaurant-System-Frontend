import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    SplitButtonModule,
    ChipModule,
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
  breadcrumbItems: MenuItem[] | undefined;
  specialBtnItems: MenuItem[];

  constructor() {
    this.specialBtnItems = [
      {
        label: 'Update',
        command: () => {},
      },
      {
        label: 'Delete',
        command: () => {},
      },
      { label: 'Angular Website', url: 'http://angular.io' },
      { separator: true },
      { label: 'Upload', routerLink: ['/fileupload'] },
    ];
  }

  ngOnInit() {
    this.breadcrumbItems = [
      { label: 'Orders', route: '/order' },
      { label: 'Order Details' },
    ];
  }
}
