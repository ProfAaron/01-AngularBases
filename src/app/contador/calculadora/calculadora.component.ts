import { Component } from '@angular/core';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
    num: string = "0";
    n1 = 0;
    op = "no";

    numero(xx: string) {
        if (this.num == "0") {
            this.num = xx;
        }
        else {
            this.num += xx
        }
    }

    operacion(s: string) {
        this.igual()
        this.n1 = Number(this.num)
        this.op = s;
        this.num = '0';
        console.log('numer: ' + this.n1 + ' operacion ' + this.op)
    }
    borrado() {
        this.n1=0;
        this.op="no"
        this.num="0"
    }
    igual() {
        if (this.op != "no") {
            let sl = this.n1 + this.op + this.num;
            let sol = eval(sl)
            this.num = String(sol)
            this.op = "no";
        }
    }
}
