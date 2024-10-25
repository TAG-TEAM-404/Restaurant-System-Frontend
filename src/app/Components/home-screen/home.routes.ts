import { Route } from '@angular/router';
import { HomeScreenComponent } from './home-screen.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FoodsMenuComponent } from '../foods-menu/foods-menu.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeScreenComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'foods-and-menus', component: FoodsMenuComponent },
    ],
  },
];
