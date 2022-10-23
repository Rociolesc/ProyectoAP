import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  
constructor(
  private renderer2:Renderer2,
  private service:DatosService,
  private router:Router
) {}
public proyectoLista:Array<any>=[];
isValid:boolean | undefined;
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
  });
  
}

public edit:boolean=false;
public btn2:boolean=false;
public btn1:boolean=true;
  
 
Delete(id:any){
  console.log(id)
  var opcion = confirm("Seguro desea eliminae este elemento");
  if(opcion === true){
    let tipo="proyecto/borrar/"+id
    this.service.delete(tipo,id)
  }
  else{ 
    console.log('No se elimino nada')
  }
  location.reload()
 }
 Add(){
  this.router.navigate(["edit/modificarProyecto"])
 }

}
