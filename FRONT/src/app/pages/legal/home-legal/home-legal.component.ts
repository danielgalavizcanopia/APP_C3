import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-legal',
  imports: [SHARED_IMPORTS],
  templateUrl: './home-legal.component.html',
  styleUrl: './home-legal.component.scss'
})
export class HomeLegalComponent {

 items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
                    {
                        label: 'Prestación de servicios',
                         routerLink: '/newcontra'
                    },
                    {
                        label: 'Convenio de colaboración',
                    },
                    {
                        label: 'ERPA',
                    },
                    {
                        label: 'colaboración para el desarrollo',
                    },
                    {
                        label: 'NDA Confidencialidad y no divulgación',
                    },
                    {
                        label: 'Oficio o notificación',
                    },
                    {
                        label: 'Otros',
                    },
        ];
    }
}

