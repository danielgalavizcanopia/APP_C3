import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ALBreadcrumbComponent } from '../al-breadcrumb/al-breadcrumb.component';
import { ALMenuComponent } from '../al-menu/al-menu.component';
import { ALFotterComponent } from '../al-fotter/al-fotter.component';

@Component({
  selector: 'al-body',
  imports: [ALFotterComponent, ALMenuComponent, ALBreadcrumbComponent, RouterModule],
  templateUrl: './al-body.component.html',
  styleUrl: './al-body.component.scss'
})
export class ALBodyComponent {

}
