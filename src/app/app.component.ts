import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiSharedModule } from './Common/UIShared.module';
import { MessageService } from 'primeng/api';
import { ToastsContainer } from './components/toast/Toast.container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiSharedModule, ToastsContainer],
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-ng-project';
}
