import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-public-perfil',
  templateUrl: './public-perfil.component.html',
  styleUrls: ['./public-perfil.component.css']
})
export class PublicPerfilComponent implements OnInit {

  Data: any;

  constructor(private informacion:DatosService) { 
  }

  ngOnInit(): void {
    let tipo = '/perfil/ver'
    this.informacion.get(tipo).subscribe((data: any) => {
      this.Data = data
      console.log(this.Data)
    })
  }

}
