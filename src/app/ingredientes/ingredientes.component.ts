import { Component, OnInit } from '@angular/core';
import { IngredientesService } from '../ingredientes.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  ingredientes: Array<any> = new Array();

  constructor(private ingredientesService: IngredientesService) { }

  ngOnInit() {
    this.listarIngredientes();
  }

  listarIngredientes(){
    this.ingredientesService.listarIngredientes().subscribe(ingredientes => {
      this.ingredientes = ingredientes;
    }, err =>{
      console.log('Erro ao listar ingredientes', err);
    })
  }

}
