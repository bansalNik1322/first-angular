import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  standalone: true,
  imports: [
    FileUploadModule,
    ButtonModule,
    BadgeModule,
    ProgressBarModule,
    ToastModule,
    CommonModule,
    HttpClientModule,
  ],
  styles: [
    `
      .file-upload-container {
        border: 2px dashed #ccc;
        padding: 20px;
        text-align: center;
        cursor: pointer;
      }
      .drop-area {
        padding: 20px;
        border: 2px dashed #007bff;
        border-radius: 4px;
        transition: background-color 0.3s;
      }
      .drop-area:hover {
        background-color: #f0f8ff;
      }
    `,
  ],
  providers: [MessageService],
})
export class FileUploadComponent {
  file: any | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(selectedFile: File) {
    this.file = selectedFile;
    this.file.objectURL = URL.createObjectURL(selectedFile);
    console.log(
      '🚀 ~ FileUploadComponent ~ handleFile ~ this.file.objectURL:',
      this.file.objectURL
    );
  }

  removeFile() {
    if (this.file) {
      URL.revokeObjectURL(this.file.objectURL!); // Clean up object URL
      this.file = null;
    }
  }
}
