import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  
  categorias: Array<any> = new Array(); 

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
    this.categoriasService.listarCategorias().subscribe(categorias =>{
      this.categorias = categorias;
    }, err =>{
      console.log('Erro ao listar as Categorias', err)
    })
  }

}
