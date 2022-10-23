import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-public-proyecto',
  templateUrl: './public-proyecto.component.html',
  styleUrls: ['./public-proyecto.component.css']
})
export class PublicProyectoComponent implements OnInit {

  isValid:boolean | undefined;
  constructor(
    private service:DatosService,
  ) {}
  public proyectoLista:Array<any>=[];
  
  ngOnInit(): void {
    let tipo="/proyecto/ver"
  this.service.get(tipo).subscribe((data: any) => {
  this.proyectoLista=data;
  if(data[0] === undefined){
    this.isValid = false;
    return
  }
  else{
    this.isValid = true;
  }
    console.log(this.proyectoLista)
  });
  }


}
