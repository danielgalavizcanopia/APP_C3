import { Injectable } from '@angular/core';
import { Project } from '../../app/interfaces/projects/projects.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const initProyecto  : Project =  {
    idprojects      : 0 ,
    Folio_project   : '', 
    ProjectName     : '', 
    Aggregation     : 0, 
    idAggregation: 0,
    Counterpart     : '', 
    NucleoAgrario   : '', 
    TipoPropiedad   : '', 
    Municipio       : '', 
    Estado          : '', 
    Status           : 0
}

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private proyecto$ = new BehaviorSubject<Project>(initProyecto);

  constructor() { }

    get selectedProject$() : Observable<Project> {
        return this.proyecto$.asObservable();
    }

    setProject(project : Project) : void {
      this.proyecto$.next(project);
    }

}
