import { Component } from '@angular/core';
import { IconsModule } from '../../../Common/Icon.module';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [IconsModule],
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

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
