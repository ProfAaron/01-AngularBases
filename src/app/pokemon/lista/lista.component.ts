import { Component, Input } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
    selector:'app-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent{

    @Input() listaPokemon: Pokemon   [] = [];

}