import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'team-and-plan',
  imports: [SHARED_IMPORTS],
  templateUrl: './team-and-plan.component.html',
  styleUrl: './team-and-plan.component.scss'
})
export class TeamAndPlanComponent {

 state: any[] | undefined;


   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}
