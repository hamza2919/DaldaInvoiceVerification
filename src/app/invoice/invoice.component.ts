import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  decodedData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Read from query parameter (?data=)
    const dataToken = this.route.snapshot.queryParamMap.get('data');
    console.log('Received data token:', dataToken);

    if (dataToken) {
      const decoded = this.decodeBase64Json(dataToken);
      this.decodedData = decoded || this.getDefaultInvoice();
      console.log('Decoded invoice data:', this.decodedData);
    } else {
      this.decodedData = this.getDefaultInvoice();
    }
  }

  decodeBase64Json(encoded: string): any {
    try {
      // Decode Base64
      const decodedString = atob(encoded);
      // Parse JSON
      return JSON.parse(decodedString);
    } catch (err) {
      console.error('Error decoding Base64 JSON:', err);
      return null;
    }
  }

  getDefaultInvoice() {
    return {
      invoiceNumber: 'D0342INV31162',
      invoiceDate: '06 October 2025',
      distributorName: 'Athar Traders-112694',
      distributorPhone: '03211234567',
      customerName: 'FOJI KS - N00000011617',
      totalAmount: '11,177.58'
    };
  }
}
