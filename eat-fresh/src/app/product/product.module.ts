import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ProductComponent ],
  exports: [
    ProductComponent,
  ], 
  entryComponents: [
  ] ,
  providers: [
    ProductService
  ],
})
export class ProductModule { }
