import { Routes } from '@angular/router';

import { InBodyComponent } from './shared/interno/in-body/in-body.component';
import { PuBodyComponent } from './shared/publico/pu-body/pu-body.component';

import { InicioComponent } from './pages/interno/inicio/inicio.component';
import { LoginComponent } from './pages/publico/login/login.component';
import { DashboardProjectComponent } from './pages/interno/dashboard-project/dashboard-project.component';
import { PortafolioComponent } from './pages/interno/portafolio/portafolio.component';
import { ProspectOnboardingComponent } from './pages/interno/MacroProcess/Origination/prospect-onboarding/prospect-onboarding.component';
import { FeasibilityComponent } from './pages/interno/MacroProcess/Origination/feasibility/feasibility.component';
import { LegalDueDiligenceComponent } from './pages/interno/MacroProcess/Origination/legal-due-diligence/legal-due-diligence.component';
import { ProjectApprovalComponent } from './pages/interno/MacroProcess/Origination/project-approval/project-approval.component';
import { LegalKYCComponent } from './pages/interno/MacroProcess/Origination/legal-kyc/legal-kyc.component';
import { TransactionApprovalComponent } from './pages/interno/MacroProcess/Origination/transaction-approval/transaction-approval.component';
import { ContractingComponent } from './pages/interno/MacroProcess/Origination/contracting/contracting.component';
import { TechnicalDueDiligenceComponent } from './pages/interno/MacroProcess/Origination/technical-due-diligence/technical-due-diligence.component';
import { FullProjectsComponent } from './pages/interno/full-projects/full-projects.component';
import { AuthGuard } from '../service/guards/AuthGuard.service';
import { HomeLegalComponent } from './pages/legal/home-legal/home-legal.component';
import { ALBodyComponent } from './shared/areaLegal/al-body/al-body.component';
import { InfoContraLegalComponent } from './pages/legal/info-contra-legal/info-contra-legal.component';
import { NewContraLegalComponent } from './pages/legal/new-contra-legal/new-contra-legal.component';
import { AgendaLegalComponent } from './pages/legal/agenda-legal/agenda-legal.component';
import { AdminUserLegalComponent } from './pages/legal/admin-user-legal/admin-user-legal.component';

export const routes: Routes = [

    {
        path: '', component: PuBodyComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
                canActivate: [AuthGuard]
            },
        ]
    },

    {
        path: '', component: InBodyComponent,
        children: [
            //inicia menu nav interno
            {
                path: 'Inicio',//dashboard general
                component: InicioComponent,
            },
            {
                path: 'projects',
                component: FullProjectsComponent,
            },

            //-----------------------------------------------------------------------
            //inicia el compartido del menu de portafolio
            {
                path: 'portafolio', component: PortafolioComponent,
                children: [
                    //origination
                    {
                        path: '',
                        component: DashboardProjectComponent,
                    },
                    {
                        path: 'prospect',
                        component: ProspectOnboardingComponent,
                    },
                    {
                        path: 'feasibility',
                        component: FeasibilityComponent,
                    },
                    {
                        path: 'legal',
                        component: LegalDueDiligenceComponent,
                    },
                    {
                        path: 'technical',
                        component: TechnicalDueDiligenceComponent,
                    },
                    {
                        path: 'approval',
                        component: ProjectApprovalComponent,
                    },
                    {
                        path: 'kyc',
                        component: LegalKYCComponent,
                    },
                    {
                        path: 'transaction',
                        component: TransactionApprovalComponent,
                    },
                    {
                        path: 'contrating',
                        component: ContractingComponent,
                    },

                ]
            },

        ],
        canActivate: [AuthGuard]
    },

    //--------------------------------------------------------------------
    //inicia menu area de legal
    {
        path: '', component: ALBodyComponent,
        children: [
            //menu de legal
            {
                path: 'legal',
                component: HomeLegalComponent,
            },
            {
                path: 'newcontra',
                component: NewContraLegalComponent,
            },
            {
                path: 'infocontra',
                component: InfoContraLegalComponent,
            },
            {
                path: 'agenda',
                component: AgendaLegalComponent,
            },
            {
                path: 'adminlegal',
                component: AdminUserLegalComponent,
            },

        ]
    },



];

