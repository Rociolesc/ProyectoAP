import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-public-experiencia',
  templateUrl: './public-experiencia.component.html',
  styleUrls: ['./public-experiencia.component.css']
})
export class PublicExperienciaComponent implements OnInit {

  constructor(
    private service: DatosService,
  ) { }
  listExperiencia: Array<any> = []

  ngOnInit(): void {
    let tipo='/experiencia/ver'
    this.service.get(tipo).subscribe((data: any) => {
    this.listExperiencia=data;
      console.log(this.listExperiencia)
    });
  }

}
