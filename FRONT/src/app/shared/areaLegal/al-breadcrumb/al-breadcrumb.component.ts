import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SHARED_IMPORTS } from '../../imports';

@Component({
  selector: 'app-al-breadcrumb',
  imports: [SHARED_IMPORTS],
  templateUrl: './al-breadcrumb.component.html',
  styleUrl: './al-breadcrumb.component.scss'
})
export class ALBreadcrumbComponent {

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];
}
}