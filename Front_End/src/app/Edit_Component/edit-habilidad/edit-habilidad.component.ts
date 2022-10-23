import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  Data: any;
  isValid:boolean | undefined;
  @ViewChild('porcentaje') porc:any| undefined
  public habilidadesLista:Array<any>=[];
  constructor(private renderer2:Renderer2,
    private service:DatosService,
    private router:Router) {}
  ngOnInit(): void {
    let tipo="/habilidad/ver"
  this.service.get(tipo).subscribe((data: any) => {
  this.habilidadesLista=data;
  if(data[0] === undefined){
    this.isValid = false;
    return
  }
  else{
    this.isValid = true;
  }
  console.log(data[0])
  });
  }
  public edit:boolean=false;
  public btn2:boolean=false;
  public btn1:boolean=true;
  Delete(id:any){
    
    var opcion = confirm("Seguro desea eliminae este elemento");
    if(opcion === true){
     
      let tipo='habilidad/borrar/'+id
      
      this.service.delete(tipo,id)
  
      console.log(this.habilidadesLista)
      
    }
    else{ 
      console.log('No se elimino nada')
    }
    location.reload()
   }
   
   Add(){
    this.router.navigate(["edit/modificarHabilidades"])
   }

}
