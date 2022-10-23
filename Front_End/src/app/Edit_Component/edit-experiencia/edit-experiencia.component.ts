import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  constructor(
    private renderer2: Renderer2,
    private service: DatosService,
    private router: Router
  ) { }
  listExperiencia: Array<any> = []
  isValid:boolean | undefined;
  ngOnInit(): void {
    let tipo='/experiencia/ver'
    this.service.get(tipo).subscribe((data: any) => {
    this.listExperiencia=data;
    if(data[0] === undefined){
      this.isValid = false;
      return
    }
    else{
      this.isValid = true;
    }
      console.log(this.listExperiencia)
    });
    
  }
  public edit:boolean=false;
  public btn2:boolean=false;
  public btn1:boolean=true;
  
  Delete(id:any){
    var opcion = confirm("Seguro desea eliminae este elemento");
    if(opcion === true){
      
      let tipo='experiencia/borrar/'+id
      this.service.delete(tipo,id)
  
      console.log(this.listExperiencia)
      
    }
    else{ 
      console.log('No se elimino nada')
    }
    location.reload()
   }
   Add(){
    this.router.navigate(["edit/modificarExperiencia"])
   }

}
