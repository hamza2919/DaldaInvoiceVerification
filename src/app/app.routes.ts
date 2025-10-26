import { Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Routes = [
   
  { path: '', redirectTo: '/OB/qrcode', pathMatch: 'full' },
  { path: 'OB/qrcode', component: InvoiceComponent },
  { path: '**', redirectTo: '/OB/qrcode' }
];
