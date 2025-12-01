import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports';
import { MenuItem } from 'primeng/api';
import { ListPlanBeneComponent } from './ListPlanKeymiles/list-plan-bene/list-plan-bene.component';
import { ListPlanCommComponent } from './ListPlanKeymiles/list-plan-comm/list-plan-comm.component';
import { ListPlanImpleComponent } from './ListPlanKeymiles/list-plan-imple/list-plan-imple.component';
import { ListPlanOriginComponent } from './ListPlanKeymiles/list-plan-origin/list-plan-origin.component';
import { ListPlanRegisComponent } from './ListPlanKeymiles/list-plan-regis/list-plan-regis.component';
import { ListPlanRepoComponent } from './ListPlanKeymiles/list-plan-repo/list-plan-repo.component';
import { ListPlanSettComponent } from './ListPlanKeymiles/list-plan-sett/list-plan-sett.component';
import { ListPlanVeriComponent } from './ListPlanKeymiles/list-plan-veri/list-plan-veri.component';
import { Router } from '@angular/router';

interface Rp {
  name: string;
}

interface milestones {
  name: string;
}

@Component({
  selector: 'app-portafolio',
  imports: [SHARED_IMPORTS,
    ListPlanBeneComponent,
    ListPlanCommComponent,
    ListPlanImpleComponent,
    ListPlanOriginComponent,
    ListPlanRegisComponent,
    ListPlanRepoComponent,
    ListPlanSettComponent,
    ListPlanVeriComponent,
  ],

  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {
  MenuGlobal: boolean = false;

  MenuProject: MenuItem[] | undefined;
  MenuGeneProject: MenuItem[] | undefined;
  Calendar: MenuItem[] | undefined;
  overview: boolean = false;
  projectlog: boolean = false;
  planning: boolean = false;
  gann: boolean = false;
  position!: 'bottom';
  rp: any[] | undefined;
  milestones: any[] | undefined;
  visible: boolean = false;

        showDialog() {
        this.visible = true;
    }

  projectLog(position: 'bottom') {
    this.position = position;
    this.projectlog = true;
  }

    constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.MenuProject = [
      {
        label: 'Dashboard project',
        items: [
          {
            label: 'Home',
            command: () => {
              this.router.navigate(['/portafolio']);
            }
          },
        ]
      },
        //-----------------------------------------------------------------------
            //inicia origination
      {
        label: 'Origination',
        items: [
          {
            label: 'Prospect Onboarding',
            command: () => {
              this.router.navigate(['portafolio/prospect']);
            }
          },
          {
            label: 'Feasibility',
            command: () => {
              this.router.navigate(['portafolio/feasibility']);
            }
          },
          {
            label: 'Legal Due Diligence',
            command: () => {
              this.router.navigate(['portafolio/legal']);
            }
          },
          {
            label: 'Technical Due Diligence',
            command: () => {
              this.router.navigate(['portafolio/technical']);
            }
          },
          {
            label: 'Project Approval',
            command: () => {
              this.router.navigate(['portafolio/approval']);
            }
          },
          {
            label: 'Legal KYC',
            command: () => {
              this.router.navigate(['portafolio/kyc']);
            }
          },
          {
            label: 'Transaction Approval',
            command: () => {
              this.router.navigate(['portafolio/transaction']);
            }
          },
          {
            label: 'Contracting',
            command: () => {
              this.router.navigate(['portafolio/contrating']);
            }
          },
        ]
      },
         //-----------------------------------------------------------------------
            //inicia Implementation
      {
        label: 'Implementation',
        items: [
          {
            label: 'New',
          },
          {
            label: 'Search',
          }
        ]
      },
       //-----------------------------------------------------------------------
            //inicia Documents
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
          },
          {
            label: 'Search',
          }
        ]
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
          },
          {
            label: 'Search',
          }
        ]
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
          },
          {
            label: 'Search',
          }
        ]
      },
    ];

    this.MenuGeneProject = [
      {
        label: 'List',
        items: [
          {
            label: 'Full Project Log',
          },
          {
            label: 'Incidences',
          },

        ]
      },
    ];

    this.Calendar = [
      {
        label: 'Planning milestones',
        icon: 'pi pi-calendar-clock',
        command: () => {
          this.planning = true;
        }
      },
      {
        label: 'Diagrama Gannt',
        icon: 'pi pi-clock',
        command: () => {
          this.gann = true;
        }
      }
    ];

    this.rp = [
      { name: 'RP1' },
      { name: 'RP2' },
      { name: 'RP3' },
    ];

     this.milestones = [
      { name: 'Mileston1' },
      { name: 'Mileston2' },
      { name: 'Mileston3' },
    ];
  }

}
