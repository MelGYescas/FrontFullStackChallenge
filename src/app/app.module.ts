import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewDataComponent } from './view-data/view-data.component';
import { HomeComponent } from './home/home.component';

import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    UploadCsvComponent,
    ViewDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [UploadCsvComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
