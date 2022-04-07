import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlHandlerComponent } from './html-handler/html-handler.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    HtmlHandlerComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    PokemonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
