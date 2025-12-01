import { Injectable } from '@angular/core';
import { UtilApiService } from '../UtilApi.service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  ApiUrl: string = environment.url

  constructor(private _apiService : UtilApiService) {

  }

  getProjects(token: string): Observable<any[]> {
    return this._apiService.sendGetRequest(this.ApiUrl + "proyectos/get_projects/", token);
  }

}
