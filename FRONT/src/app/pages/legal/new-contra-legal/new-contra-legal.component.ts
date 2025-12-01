import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports';
import { Product } from '../../../../domain/product';
import { ProductService } from '../../../../service/productservice';

interface City {
  name: string;
}

@Component({
  selector: 'app-new-contra-legal',
  imports: [SHARED_IMPORTS],
  templateUrl: './new-contra-legal.component.html',
  styleUrl: './new-contra-legal.component.scss',
  providers: [ProductService]
})

export class NewContraLegalComponent {

  date1: Date | undefined;

  cities: City[] | undefined;

  selectedCity: City | undefined;

  products!: Product[];

  sizes!: any[];

  selectedSize: any = undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cities = [
      { name: 'Fisica' },
      { name: 'Moral' },
    ];

    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

  }
}
