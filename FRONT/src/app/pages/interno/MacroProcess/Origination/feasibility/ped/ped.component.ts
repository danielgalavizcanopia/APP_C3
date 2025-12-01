import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'ped',
  imports: [SHARED_IMPORTS],
  templateUrl: './ped.component.html',
  styleUrl: './ped.component.scss'
})
export class PedComponent {
  
 state: any[] | undefined;

   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}
