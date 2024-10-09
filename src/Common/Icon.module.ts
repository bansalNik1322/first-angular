import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import {
  AlertCircle,
  AlignLeft,
  BarChart2,
  Bell,
  Book,
  CheckSquare,
  Facebook,
  HelpCircle,
  Home,
  MessageSquare,
  PieChart,
  Settings,
  Sliders,
  Square,
  User,
  UserPlus,
} from 'angular-feather/icons';

const icons = {
  Sliders,
  User,
  Book,
  CheckSquare,
  Square,
  UserPlus,
  AlignLeft,
  BarChart2,
  Bell,
  AlertCircle,
  Home,
  MessageSquare,
  PieChart,
  Settings,
  HelpCircle,
};

@NgModule({ imports: [FeatherModule.pick(icons)], exports: [FeatherModule] })
export class IconsModule {}
