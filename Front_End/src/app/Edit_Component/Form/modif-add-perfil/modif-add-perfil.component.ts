import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';
import { Perfil } from 'src/app/Model/perfil.model';

@Component({
  selector: 'app-modif-add-perfil',
  templateUrl: './modif-add-perfil.component.html',
  styleUrls: ['./modif-add-perfil.component.css']
})
export class ModifAddPerfilComponent implements OnInit {

  id: any;
  public formPerfil!: FormGroup;
  Data: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: DatosService, private router: Router) {
    this.id = this.route.snapshot.params['id']
  }
  na: any = 'jeje'
  ngOnInit(): void {
    let tipo = '/perfil/ver'
    this.service.getId(tipo,this.id).subscribe((data: any) => {
      this.Data = data
      console.log(this.Data.nombre);
      this.formPerfil = this.fb.group({
        nombre: [this.Data.nombre, [Validators.required]],
        apellido: [this.Data.apellido, [Validators.required]],
        titulo: [this.Data.titulo, [Validators.required]],
        descripcion: [this.Data.descripcion, [Validators.required]],
        img: [this.Data.img, [Validators.required]]

      })
    })
}
carga:any=false;
uploadImage($event:any){
  const name = "perfil_"+this.id;
  const carpeta="imagen"
  this.service.uploadImage($event, name,carpeta)
  this.carga = true;
  this.service.carga = true;
  
}
urlImg:any;

  public img: string = './assets/imagenes/foto.png'
  modificar() {
    let tipo = '/perfil/modificar'
    if(this.service.url == ""){
      this.urlImg = this.Data.img;
    }else {
      this.urlImg = this.service.url
    }
    console.log(this.urlImg)
    
    let perfil1 = new Perfil(this.id, this.formPerfil.value.nombre, this.formPerfil.value.apellido, this.formPerfil.value.titulo, this.formPerfil.value.descripcion,this.urlImg)
    this.service.post(tipo, perfil1)
    this.router.navigate(["/edit"])
  }


}
