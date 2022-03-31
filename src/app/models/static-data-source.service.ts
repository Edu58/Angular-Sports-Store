import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSourceService {

  private products: Product[] = [
    new Product( 1, "Product 1", "Category 1", "Product 1 (Category 1)", 100 ),
    new Product( 2, "Product 2", "Category 1", "Product 2 (Category 1)", 100 ),
    new Product( 3, "Product 3", "Category 1", "Product 3 (Category 1)", 100 ),
    new Product(4, "Product 4", "Category 2", "Product 4 (Category 2)", 100),
    new Product(5, "Product 5", "Category 2", "Product 5 (Category 2)", 100),
    new Product(6, "Product 6", "Category 3", "Product 6 (Category 3)", 100),
    new Product(7, "Product 7", "Category 3", "Product 7 (Category 3)", 100),
    new Product(8, "Product 8", "Category 4", "Product 8 (Category 4)", 100),
    new Product(9, "Product 9", "Category 3", "Product 9 (Category 3)", 100),
    new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
  ]

  getProducts (): Observable<Product[]> {
    return from([this.products])
  }
}
