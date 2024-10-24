import { Routes } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';
import { PipesDirectivasComponent } from './pages/pipes-directivas/pipes-directivas.component';

export const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: '', component: PipesDirectivasComponent },
];
