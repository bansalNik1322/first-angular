import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  first: number = 10;
  @Output() paginationChanges = new EventEmitter();

  rows: number = 50;

  onPageChange(event: any) {
    console.log('🚀 ~ PaginationComponent ~ onPageChange ~ event:', event);
    this.first = event.first;
    this.rows = event.rows;

    this.paginationChanges.emit({
      offset: event.first,
      pageLength: event.rows,
      currentPage: event.page,
    });
  }
}
