import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-public-body',
  templateUrl: './public-body.component.html',
  styleUrls: ['./public-body.component.css']
})
export class PublicBodyComponent implements OnInit {

  isValidProyecto:boolean | undefined;
  isValidformacion:boolean | undefined;
  isValidHabilidad:boolean | undefined;
  isValidExperiencia:boolean | undefined;
  constructor(private service:DatosService,) { }
  public proyectoLista:Array<any>=[];
  public formacionLista: Array<any> = [];
  public habilidadesLista:Array<any>=[];
  listExperiencia: Array<any> = []
  
  ngOnInit(): void {
    let tipoProyecto="/proyecto/ver"
    this.service.get(tipoProyecto).subscribe((dataProyect: any) => {
    this.proyectoLista=dataProyect;
    if(dataProyect[0] === undefined){
      this.isValidProyecto = false;
      return
    }
    else{
      this.isValidProyecto = true;
    }
  });
  let tipoFormacion = '/formacion/ver'
    this.service.get(tipoFormacion).subscribe((data: any) => {
      this.formacionLista = data;
      if(data[0] === undefined){
        this.isValidformacion = false;
        return
      }
      else{
        this.isValidformacion = true;
      }});
      let tipoHabilidad="/habilidad/ver"
  this.service.get(tipoHabilidad).subscribe((data: any) => {
  this.habilidadesLista=data;
  if(data[0] === undefined){
    this.isValidHabilidad = false;
    return
  }
  else{
    this.isValidHabilidad = true;
  }});
  let tipoExperiencia='/experiencia/ver'
    this.service.get(tipoExperiencia).subscribe((data: any) => {
    this.listExperiencia=data;
    if(data[0] === undefined){
      this.isValidExperiencia = false;
      return
    }
    else{
      this.isValidExperiencia = true;
    }
      console.log(this.listExperiencia)
    });
}


}
