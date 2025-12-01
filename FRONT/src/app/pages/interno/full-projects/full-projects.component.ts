import { ChangeDetectorRef, Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports';
import { ProductService } from '../../../../service/productservice';
import { Product } from '../../../../domain/product';
import { MenuItem } from 'primeng/api';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-full-projects',
  imports: [SHARED_IMPORTS],
  providers: [ProductService],
  templateUrl: './full-projects.component.html',
  styleUrl: './full-projects.component.scss'
})
export class FullProjectsComponent {

  products!: Product[];
  selectedProducts!: Product;
  cols!: Column[];
  selectedColumns!: Column[];
   items!: MenuItem[];

  constructor(private productService: ProductService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
         this.cd.markForCheck();
    });

        this.cols = [
            { field: 'name', header: 'ID' },
            { field: 'category', header: 'IDCAR' },
            { field: 'quantity', header: 'Project' },
            { field: 'quantity', header: 'Aggregation' },
            { field: 'quantity', header: 'State' },
            { field: 'quantity', header: 'Municipality' },
            { field: 'quantity', header: 'Process RP' },
            { field: 'quantity', header: 'Incidences total' },
            { field: 'quantity', header: 'Project log total' },
        ];

        this.selectedColumns = this.cols;

        this.items = [
          {
            label: 'Full incidences',
              command: () => {
                }
          },
          {
            label: 'Marketing',
              command: () => {
                }
          },
          {
            label: 'General KPI',
              command: () => {
                }
          },
          {
            label: 'Full projects detall',
              command: () => {
                }
          },
        ]

  }

  
}

