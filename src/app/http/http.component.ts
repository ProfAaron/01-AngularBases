import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Pais } from './http.interfaces';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpServ: HttpService) { }

  ngOnInit(): void {
  }

  pais: string = "";
  hayError: boolean = false;
  paises: Pais[] = []

  buscar() {
    this.hayError = false;
    this.httpServ.obtenerInfo(this.pais)
      .subscribe({
        next: (paises) => {
          console.log(this.paises);
          this.paises = paises;
        },
        error: (err: Error) => {
          this.hayError = true;
          this.paises = [];
        }
      }
      )
  }


}
