import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'activity-area',
  imports: [SHARED_IMPORTS],
  templateUrl: './activity-area.component.html',
  styleUrl: './activity-area.component.scss'
})
export class ActivityAreaComponent {

 state: any[] | undefined;


   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}
