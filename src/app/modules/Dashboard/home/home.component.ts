import { Component } from '@angular/core';
import { IconsModule } from '../../../Common/Icon.module';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { TableComponent } from '../../../components/table/table.component';
import { DoughNutComponent } from "../../../components/charts/pie-chart/dough-nut.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, InfoCardComponent, IconsModule, TableComponent, DoughNutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dashboardData = {
    totalUsers: { count: 10, text: 'Total Users' },
    activeUsers: { count: 10, text: 'Active Users' },
    totalPosts: { count: 10, text: 'Total Posts' },
  };
}
