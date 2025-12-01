import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports';
import { CustomerService } from '../../../../service/customerservice';
import { Customer } from '../../../../domain/customer';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SHARED_IMPORTS],
  providers: [CustomerService],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  
  balanceFrozen: boolean = false;
  customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {


    setTimeout(() => {
      this.customerService.getCustomersMedium().then((data) => {
        this.customers = data;
      });
    }, 1000);
    
   
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

}
