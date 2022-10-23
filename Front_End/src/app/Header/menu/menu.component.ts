import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DatosService } from 'src/app/data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('menu')contMenu: ElementRef | undefined;
 @ViewChild('menu2')contMenu2: ElementRef | undefined;
 isValidProyecto:boolean | undefined;
  isValidformacion:boolean | undefined;
  isValidHabilidad:boolean | undefined;
  isValidExperiencia:boolean | undefined;
  constructor(private service:DatosService,private renderer2:Renderer2) { }
  public proyectoLista:Array<any>=[];
  public formacionLista: Array<any> = [];
  public habilidadesLista:Array<any>=[];
  listExperiencia: Array<any> = []
  
  public x:number=0;
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
  menu__split(): void{
  const menuCont=this.contMenu?.nativeElement;
  if(this.x===0){
  this.renderer2.setStyle(menuCont,"left", '0');
  this.x=1
  }
  else if(this.x===1){
    this.renderer2.setStyle(menuCont,"left", '-200px');
  this.x=0
  }
  }
  menu__splitVertical(): void{
    const menuCont2=this.contMenu2?.nativeElement;
    if(this.x===0){
    this.renderer2.setStyle(menuCont2,"top", '0');
    this.x=1
    }
    else if(this.x===1){
      this.renderer2.setStyle(menuCont2,"top", '-184px');
    this.x=0
    }
    }

}
