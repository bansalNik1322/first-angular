import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import {
  AlertCircle,
  AlignLeft,
  BarChart2,
  Bell,
  Edit,
  Book,
  CheckSquare,
  HelpCircle,
  Home,
  MessageSquare,
  PieChart,
  RefreshCcw,
  Settings,
  Sliders,
  Square,
  User,
  UserPlus,
  Users,
  Plus,
  List,
  LogOut,
} from 'angular-feather/icons';

const icons = {
  Sliders,
  Users,
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
  Plus,
  List,
  HelpCircle,
  RefreshCcw,
  LogOut,
  Edit,
};

@NgModule({ imports: [FeatherModule.pick(icons)], exports: [FeatherModule] })
export class IconsModule {}
