import { Component } from "@angular/core";



@Component ({
    selector:'app-contador',
    template: `  

        <h1>Hola Mundo Primer Proyecto en Angular:)</h1>
        <h2>La Base Es de {{ base }}</h2>

        <button (click) = "acumular(base)"> + {{base}} </button>

        <span>{{numero}}</span>

        <button (click) = "acumular(-base)"> - {{base}} </button>


        <h1>{{titulo}}</h1>
    
    `
})

export class ContadorComponent {
    titulo:string = 'Contador App';
    numero:number = 10;
    base:number = 6;
  
    // base2(valor:number) {
    //   this.numero += valor;
    // } 
    
    acumular( valor:number ) {
      this.numero += valor;
    }
}