import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload-csv', component: UploadCsvComponent },
  { path: 'view-data', component: ViewDataComponent },
  // { path: '', redirectTo: '/upload-csv', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
