import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SHARED_IMPORTS } from '../../imports';
import { Router } from '@angular/router';
import { authGuardService } from '../../../../service/authGuard.service';
import { ProjectsService } from '../../../../service/projects/projects.service';
import { Project } from '../../../interfaces/projects/projects.interface';
import { ObservableService } from '../../../../service/observable/Observable.service';

@Component({
  selector: 'app-al-menu',
  imports: [SHARED_IMPORTS],
  templateUrl: './al-menu.component.html',
  styleUrl: './al-menu.component.scss'
})
export class ALMenuComponent {

  items: MenuItem[] | undefined;
  avatar: MenuItem[] | undefined;
  sidebarPerfil: boolean = false;

  countries: any[] | undefined;
  selectedCountry?: Project;

  token: any;
  user: any;
  projects: Project[] = [];

  constructor(
    private router: Router,
    private _authGuardService: authGuardService,
    private _projectServices: ProjectsService,
    private readonly serviceObsProject$: ObservableService,
  ) {
    this.user = this._authGuardService.getUser();

  }

  ngOnInit() {

    this.countries = [
      { name: 'Project 1', },
      { name: 'Project 2', },
      { name: 'Project 3', },
    ];

    this.avatar = [
      {
        label: 'Aviso de privacidad',
      },
      {
        label: 'Terminos y condiciones',
      },

    ];

    this.items = [
      {
        label: 'Home',
        command: () => {
          this.router.navigate(['/legal']);
        }
      },
      {
        label: 'Agenda',
        command: () => {
          this.router.navigate(['/newcontra']);
        }
      },
      {
        label: 'Administrador de usuarios',
        command: () => {
          this.router.navigate(['/adminlegal']);
        }
      },
    ];

    this.getProjects();
    this.observaProjectSelected();
  }

  getProjects() {
    let savedValue = this._authGuardService.getProject();
    this._projectServices.getProjects(this.token?.access_token).subscribe((response: any) => {
      this.projects = response.projects;
      this.selectedCountry = this.projects.find(x => x.ProjectName == savedValue);
      this.onProjectSelected(this.selectedCountry)
    });
  }

  onProjectSelected(project: Project | any) {
    this.serviceObsProject$.setProject(project);
    sessionStorage.setItem('selectedOption', project?.ProjectName);
  }

  observaProjectSelected() {
    /*** Este sirve para saber que proyecto ha sido seleccionado y se copia este bloque */
    this.serviceObsProject$.selectedProject$.subscribe((project: Project) => {
      if (project) {
        this.selectedCountry = this.projects.find(x => x.idprojects == project.idprojects);
      } else {

      }
    });
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['/']);
  }
}

