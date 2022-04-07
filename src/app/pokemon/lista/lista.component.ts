import { Component, Input } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from '../pokemon.service';

@Component({
    selector:'app-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent{

    //@Input() listaPokemon: Pokemon   [] = [];

    constructor(private servicioPokemon: PokemonService){}

    get listaPokemon(){
        return this.servicioPokemon.obtenerLista;
    }
}