import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor() { }

   @Output() onPokemonAgregado 
    = new EventEmitter<Pokemon>();

  nuevo: Pokemon = {
    nombre: "",
    pc: 0
  }

  agregar( ){
    this.onPokemonAgregado.emit(this.nuevo);
    this.nuevo= {
      nombre: "",
      pc: 0
    }
  }

}
