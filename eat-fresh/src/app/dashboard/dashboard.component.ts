import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/services';  
import { Product } from '../product/models';
import { MatGridListModule } from '@angular/material'; 
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  color = 'warn';
  mode = 'Determinate';
  value = 75;
  bufferValue = 75;
  products: Product[] = [];
  
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
     this.getHeroes();
  }
  
  getHeroes(): void {
     this.productService.getProducts()
       .subscribe(products => this.products = products.slice(0, 50));
  }

}
