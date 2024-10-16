import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UiSharedModule } from './Shared/modules/UIShared.module';
import { MessageService } from 'primeng/api';
import { ToastsContainer } from './components/toast/Toast.container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiSharedModule, RouterModule, ToastsContainer],
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-ng-project';
}
