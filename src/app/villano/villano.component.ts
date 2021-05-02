import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
 selectedVillano?: Villano;
 villanos: Villano[]=[
  {id:1, name: "Tenpenny",  nivel: 20, namepower: "Corrupcion"},
  {id:2, name: "Joel Miller", nivel: 2013, namepower: "Punteria"},
  {id:3, name: "Jesus", nivel:10, namepower: "Fe"},
  {id:4, name: "Carlo Magno", nivel:100, namepower: "Tropas"},
  {id:5, name: "Thanos", nivel:2017, namepower: "Gemas"},
  {id:6, name: "Jason Voorhees", nivel:1985, namepower: "Sobrenatural"},
];
  numero = 0;
  base = 5;
  constructor() { }
  ngOnInit() {
  }
  onSelect(villano: Villano): void {
    this.selectedVillano = villano;
  }
  acumulador(valor:number){
    this.numero += valor;
  }
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

}
