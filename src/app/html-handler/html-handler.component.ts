import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-handler',
  templateUrl: './html-handler.component.html',
  styleUrls: ['./html-handler.component.css']
})
export class HtmlHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = ''
  apellido: string = ''
  edad: number = 0

  guardar( event: KeyboardEvent, nombre: string){
    if(event.key == 'Enter'){
      this.nombre = nombre;
      console.log(nombre);
    }
  }

  almacenar(){
    console.log('Hola');
  }
}
