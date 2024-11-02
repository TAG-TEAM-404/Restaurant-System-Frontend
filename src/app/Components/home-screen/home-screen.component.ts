import { Component } from '@angular/core';
import { SideBarComponent } from '../../Shared/side-bar/side-bar.component';
import { NavBarComponent } from '../../Shared/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [SideBarComponent, NavBarComponent, RouterModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
})
export class HomeScreenComponent {}
