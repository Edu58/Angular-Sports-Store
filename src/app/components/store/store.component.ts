import { Component, OnInit } from '@angular/core';
import { ProductRepoService } from 'src/app/models/product-repo.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory: string | undefined;
  public productsPerPage: number = 4
  public selectedPage: number = 1

  constructor ( private repo: ProductRepoService ) { }
  
  // get products (): Product[] {
  //   return this.repo.getProducts();
  // }

  // GET PRODUCTS BY CATEGORIES
  get products (): Product[] {
    let pageIndex: number = (this.selectedPage - 1) * this.productsPerPage 
    return this.repo.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories (): (string | undefined)[] {
    return this.repo.getCategories()
  }

  changeCategory ( newCategory?: string ): void {
    this.selectedCategory = newCategory
  }

  changePage ( newPage: number ): void {
    this.selectedPage = newPage
  }

  changePageSize ( newSize: number ): void {
    this.productsPerPage = Number(newSize)
    this.changePage(1)
  }

  get pageCount (): number {
    return Math.ceil(this.repo.getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  ngOnInit(): void {
  }

}
