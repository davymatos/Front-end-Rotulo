import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';

import { CategoriasService } from './categorias.service';
import { IngredientesService } from './ingredientes.service';



@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    IngredientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, CategoriasService, IngredientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
