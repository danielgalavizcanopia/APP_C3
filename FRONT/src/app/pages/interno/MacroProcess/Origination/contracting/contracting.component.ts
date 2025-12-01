import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'app-contracting',
  imports: [SHARED_IMPORTS],
  templateUrl: './contracting.component.html',
  styleUrl: './contracting.component.scss'
})
export class ContractingComponent {

 state: any[] | undefined;

   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}