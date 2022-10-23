import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  Data: any;
  img:any;

  constructor(private informacion:DatosService) { 
  }

  imagePath:any;
  ngOnInit(): void {
    
    let tipo ='/perfil/ver'
    this.informacion.get(tipo).subscribe((data: any) => {
      this.Data = data
      console.log(this.Data)
    })

  }
 
  
 
 modificar(){
   
 }


}
