import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../shared/imports';

interface state {
  name: string;
}


@Component({
  selector: 'app-legal-due-diligence',
  imports: [SHARED_IMPORTS],
  templateUrl: './legal-due-diligence.component.html',
  styleUrl: './legal-due-diligence.component.scss'
})
export class LegalDueDiligenceComponent {

 state: any[] | undefined;

   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}
