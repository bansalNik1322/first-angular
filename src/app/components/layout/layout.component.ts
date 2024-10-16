import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UiSharedModule } from '../../Shared/modules/UIShared.module';
import { IconsModule } from '../../Shared/modules/Icon.module';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [UiSharedModule, IconsModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations: [
    trigger('sidebarAnimation', [
      state(
        'closed',
        style({
          left: '-250px',
          opacity: 0,
          visibility: 'hidden',
        })
      ),
      state(
        'open',
        style({
          left: '0',
          opacity: 1,
          visibility: 'visible',
        })
      ),
      transition('closed <=> open', animate('300ms ease')),
    ]),
  ],
})
export class LayoutComponent {
  isSidebarOpen = true;
  dropdownStates: { [key: string]: boolean } = {};
  constructor(private router: Router) {
    this.checkActiveRoute();
  }
  ngOnInit() {
    this.checkActiveRoute();

    // Listen for navigation events to update the dropdown states
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkActiveRoute();
      }
    });
  }

  checkActiveRoute() {
    const currentRoute = this.router.url;
    this.dropdownStates['users'] = currentRoute.includes(`/dashboard/user`);
    this.dropdownStates['settings'] = currentRoute.includes(
      `/dashboard/profile/settings`
    );
    return this.dropdownStates;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
