import { Route } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

export const OrderDetailsRoutes: Route[] = [
  {
    path: '',
    component: OrdersListComponent,
  },
  { path: ':id', component: OrderDetailsComponent },
];
