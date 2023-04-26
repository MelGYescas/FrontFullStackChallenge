import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent {
  constructor(private http: HttpClient) {}

  csvData: string | null = null;
  uploadMessage: string | null = null;
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const csvData = reader.result as string;
          this.processCsvData(csvData);
        };
        reader.readAsText(file);
      }
    }
  }
  

  processCsvData(csvData: string): void {
    this.csvData = csvData;
  }

  uploadCsv(): void {
    if (!this.csvData) {
      return;
    }
  
    // Define la URL del endpoint
    const url = 'http://127.0.0.1:8000/reception/';
  
    // Crea un objeto FormData para enviar el archivo CSV
    const formData = new FormData();
    formData.append('file', new Blob([this.csvData], { type: 'text/csv' }), 'file.csv');
  
    // Realiza una solicitud POST al endpoint
    this.http.post(url, formData).subscribe(
      (response) => {
        console.log('Success:', response);
        this.uploadMessage = 'CSV file uploaded successfully!';
      },
      (error) => {
        console.error('Error:', error);
        this.uploadMessage = 'Failed to upload the CSV file!';
      }
    );
  }
  
  
  
}
