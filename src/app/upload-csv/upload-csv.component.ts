import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReceptionUsersService } from 'src/services/reception-users.service';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent {
  constructor(private http: HttpClient, private receptionUsersService: ReceptionUsersService) {}


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
  
    // Crea un objeto FormData para enviar el archivo CSV
    const formData = new FormData();
    formData.append('file', new Blob([this.csvData], { type: 'text/csv' }), 'file.csv');
  
    // Utiliza el servicio ReceptionUsersService para subir el archivo CSV
    this.receptionUsersService.uploadCsv(formData).subscribe(
      (response) => {
        console.log('Success:', response);
        this.uploadMessage = 'Se subió correctamente el archivo!';
    },
      (error) => {
        console.error('Error:', error);
        this.uploadMessage = 'Falló la subida del archivo.';
      }
    );
  }
  
  
  
  
}
