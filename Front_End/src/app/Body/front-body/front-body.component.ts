import { DatosService } from 'src/app/data.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-front-body',
  templateUrl: './front-body.component.html',
  styleUrls: ['./front-body.component.css']
})
export class FrontBodyComponent implements OnInit {

  Data: any;

  constructor(private renderer2:Renderer2,  private informacion:DatosService) { 

  }
  public formacionLista:Array<any>=[];

  ngOnInit(): void {
    this.informacion.obtenerDatos().subscribe((data: any) => {
      
      this.Data=data;
     this.formacionLista.push(this.Data.formacion.utn);
     this.formacionLista.push(this.Data.formacion.nacional);
     this.formacionLista.push(this.Data.formacion.ArP);
     


    });

}

}
