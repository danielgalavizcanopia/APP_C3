import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SHARED_IMPORTS } from '../../imports';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];
}
}
