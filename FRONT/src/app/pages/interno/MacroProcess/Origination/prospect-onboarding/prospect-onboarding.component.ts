import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../shared/imports';

interface state {
  name: string;
}

@Component({
  selector: 'app-prospect-onboarding',
  imports: [SHARED_IMPORTS],
  templateUrl: './prospect-onboarding.component.html',
  styleUrl: './prospect-onboarding.component.scss'
})
export class ProspectOnboardingComponent {

  state: any[] | undefined;
  projectalive: boolean = false;
  position!: 'bottom';
  visible: boolean = false;

  projectAlive(position: 'bottom') {
    this.position = position;
    this.projectalive = true;
  }

       showDialog() {
        this.visible = true;
    }

  ngOnInit() {
    this.state = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }
}
