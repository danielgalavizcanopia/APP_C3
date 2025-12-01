import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'project-area',
  imports: [SHARED_IMPORTS],
  templateUrl: './project-area.component.html',
  styleUrl: './project-area.component.scss'
})
export class ProjectAreaComponent {

 state: any[] | undefined;


   ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}