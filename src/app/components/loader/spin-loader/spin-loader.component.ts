import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spin-loader.component.html',
  styleUrl: './spin-loader.component.css',
})
export class SpinLoaderComponent {
  type: string = 'normal';
}
