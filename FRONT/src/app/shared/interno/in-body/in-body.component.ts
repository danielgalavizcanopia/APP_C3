import { Component } from '@angular/core';
import { InFotterComponent } from '../in-fotter/in-fotter.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-in-body',
  standalone: true,
  imports: [InFotterComponent, MenuComponent, BreadcrumbComponent, RouterModule] ,
  templateUrl: './in-body.component.html',
  styleUrl: './in-body.component.scss'
})
export class InBodyComponent {

}
