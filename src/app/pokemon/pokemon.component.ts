import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  constructor() { }

  nuevo:Pokemon = {
    nombre: '',
    pc: 0
  }

  listaPokemon: Pokemon[] = [
    {
      nombre: 'charmander',
      pc: 500
    },
    {
      nombre: 'squirtle',
      pc: 650
    }
  ]

  agregar( parametro: Pokemon ){
    this.listaPokemon.push(parametro);
    console.log(this.listaPokemon);
  }
}
