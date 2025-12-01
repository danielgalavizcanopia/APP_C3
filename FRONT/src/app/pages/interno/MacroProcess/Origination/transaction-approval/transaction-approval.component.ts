import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'app-transaction-approval',
  imports: [SHARED_IMPORTS],
  templateUrl: './transaction-approval.component.html',
  styleUrl: './transaction-approval.component.scss'
})
export class TransactionApprovalComponent {

 state: any[] | undefined;

   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}
