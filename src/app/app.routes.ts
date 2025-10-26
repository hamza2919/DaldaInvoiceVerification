import { Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Routes = [
    { path: 'OB/qrcode', component: InvoiceComponent },
  { path: 'dalda.salesflo.com/OB/qrcode', component: InvoiceComponent },
  // Add a catch-all route
  { path: '**', redirectTo: 'OB/qrcode' }
];

