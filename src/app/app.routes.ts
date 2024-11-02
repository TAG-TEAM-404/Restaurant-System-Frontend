import { Route, Routes } from '@angular/router';
import { HomeScreenComponent } from './Components/home-screen/home-screen.component';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./Components/home-screen/home.routes').then((m) => m.HomeRoutes),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./Components/order/order.routes').then(
        (m) => m.OrderDetailsRoutes
      ),
  },
];
