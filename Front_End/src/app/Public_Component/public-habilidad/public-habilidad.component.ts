import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-public-habilidad',
  templateUrl: './public-habilidad.component.html',
  styleUrls: ['./public-habilidad.component.css']
})
export class PublicHabilidadComponent implements OnInit {

 
  public habilidadesLista:Array<any>=[];
  constructor(private service:DatosService,) {}
  ngOnInit(): void {
    let tipo="/habilidad/ver"
  this.service.get(tipo).subscribe((data: any) => {
  this.habilidadesLista=data;
    console.log(this.habilidadesLista)
  });
  }


}
