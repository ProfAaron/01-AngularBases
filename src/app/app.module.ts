import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlHandlerComponent } from './html-handler/html-handler.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModuleModule } from './home/material-module.module';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    HtmlHandlerComponent,
    HomeComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    PokemonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
