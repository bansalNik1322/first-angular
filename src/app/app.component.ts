import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiSharedModule } from './Common/UIShared.module';
import { ToastComponent } from './components/toast/toast.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiSharedModule, ToastComponent],
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-ng-project';
}
