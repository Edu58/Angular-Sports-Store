import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepoService } from '../product-repo.service';
import { StaticDataSourceService } from '../static-data-source.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepoService,
    StaticDataSourceService
  ]
})
export class ModelModule { }
