import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { ToastModule } from 'primeng/toast';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from 'primeng/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from './Icon.module';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  exports: [
    MultiSelectModule,
    FileUploadModule,
    InputGroupAddonModule,
    InputGroupModule,
    TagModule,
    FloatLabelModule,
    ButtonModule,
    OverlayModule,
    CalendarModule,
    FontAwesomeModule,
    CommonModule,
    CommonModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    MatIconModule,
    CardModule,
    TableModule,
    IconsModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  imports: [
    ButtonModule,
    OverlayModule,
    FontAwesomeModule,
    InputGroupAddonModule,
    InputGroupModule,
    FloatLabelModule,
    TableModule,
    CommonModule,
    TagModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    PasswordModule,
    CheckboxModule,
    TabViewModule,
    MatIconModule,
    CardModule,
    IconsModule,
    CalendarModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    MultiSelectModule,
  ],
})
export class UiSharedModule {}
