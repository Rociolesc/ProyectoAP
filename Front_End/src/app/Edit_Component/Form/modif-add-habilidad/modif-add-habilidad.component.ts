import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';
import { Habilidad } from 'src/app/Model/habilidad.model';

@Component({
  selector: 'app-modif-add-habilidad',
  templateUrl: './modif-add-habilidad.component.html',
  styleUrls: ['./modif-add-habilidad.component.css']
})
export class ModifAddHabilidadComponent implements OnInit {

  id: any;
  Data: any;
  
  public formHabilidad!: FormGroup;
  formG() {
    this.formHabilidad = new FormGroup({
      habilidad: new FormControl(),
      porcentaje: new FormControl()
    });
  }
  
  Titulo: string = 'Agregar Habilidad';
  Accion: string = 'Agregar';
  modoEdicion: number;
  constructor(private route: ActivatedRoute,
    private service: DatosService,
    private fb: FormBuilder,
    private renderer2:Renderer2,
    private router: Router) {
    this.id = this.route.snapshot.params['id']
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']
  }

  ngOnInit(): void {
this.Accion = 'Agregar';
    this.formG()
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let tipo = '/habilidad/ver'
      this.Titulo = 'Modificar Formacion';
      this.Accion = 'Modificar'
      this.service.getId(tipo, this.id).subscribe((data: any) => {
        this.Data = data
        this.formHabilidad= this.fb.group({
          habilidad: [this.Data.habilidad, [Validators.required]],
          porcentaje: [this.Data.porcentaje, [Validators.required]],
        });
      }
      
      )
      return
    }
    else {
      this.formHabilidad = this.fb.group({
        habilidad: ["", [Validators.required]],
        porcentaje: ["", [Validators.required]],
      })
      this.Titulo = 'Agregar Formacion';
      this.Accion = 'Agregar'
      return
    }
  }
  public img: string = './assets/imagenes/foto.png'
  modificar() {
   
    console.log(this.formHabilidad.value)
    let tipo = '/habilidad/crear'
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let habilidad1 = new Habilidad( this.id ,this.formHabilidad.value.habilidad, this.formHabilidad.value.porcentaje)
      this.service.post(tipo, habilidad1)
      this.router.navigate(["/edit"])
    }
    else {
      let habilidad1 = new Habilidad(null,this.formHabilidad.value.habilidad, this.formHabilidad.value.porcentaje)
      this.service.post(tipo, habilidad1)
      this.router.navigate(["/edit"])

    }

  }
  


}
