import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[counterOf]'
})
export class CounterDirective implements OnChanges {

  constructor ( private container: ViewContainerRef, private template: TemplateRef<Object> ) { }
  
  @Input( "counterOf" )
  counter!: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear()
    for ( let i: number = 0; i < this.counter; i++ ) {
      this.container.createEmbeddedView( this.template,
        new CounterDirectiveContext( i + 1 ) );
    }
  }
}

class CounterDirectiveContext {
    constructor(public $implicit: any) {
      
    }
  }