import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-public-formacion',
  templateUrl: './public-formacion.component.html',
  styleUrls: ['./public-formacion.component.css']
})
export class PublicFormacionComponent implements OnInit {

  constructor(
    private service:DatosService,
    ) {}
  public formacionLista:Array<any>=[];
  
  ngOnInit(): void {
    let tipo = '/formacion/ver'
    this.service.get(tipo).subscribe((data: any) => {
      this.formacionLista = data;
      console.log(this.formacionLista)
    });
  }


}
