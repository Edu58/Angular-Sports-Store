import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSourceService } from './static-data-source.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepoService {
  private products: Product[] = [];
  private categories: (string | undefined)[] = []

  constructor ( private dataSource: StaticDataSourceService ) {
    dataSource.getProducts().subscribe( (data: Product[]): void => {
      this.products = data
      this.categories = data.map((p: Product) => p.category).filter((c, index, array) => array.indexOf(c) == index).sort()

    })
  }
   
  getProducts ( category?: string): Product[] {
    return this.products.filter((p: Product): boolean => category == null || category == p.category)
  }

  getProduct ( id: number ): Product | undefined {
    return this.products.find((p: Product): boolean => p.id == id)
  }

  getCategories (): (string | undefined)[] {
    return this.categories
  }
}
