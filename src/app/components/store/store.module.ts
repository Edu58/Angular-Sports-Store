import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { CounterDirective } from './directive/counter.directive';



@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ], 
  exports: [StoreComponent]
})
export class StoreModule { }
