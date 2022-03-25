import { NgModule } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

import { ContadorComponent } from './contador/contador.component'


@NgModule({
    declarations: [
        ContadorComponent,
        CalculadoraComponent
    ],
    exports: [
        ContadorComponent,
        CalculadoraComponent
    ]
})
export class ContadorModule {}