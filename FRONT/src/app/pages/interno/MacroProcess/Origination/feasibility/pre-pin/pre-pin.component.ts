import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'pre-pin',
  imports: [SHARED_IMPORTS],
  templateUrl: './pre-pin.component.html',
  styleUrl: './pre-pin.component.scss'
})
export class PrePinComponent {

 state: any[] | undefined;


   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}