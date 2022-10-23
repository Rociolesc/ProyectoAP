import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';
import { Proyecto } from 'src/app/Model/proyecto.model';

@Component({
  selector: 'app-modif-add-proyecto',
  templateUrl: './modif-add-proyecto.component.html',
  styleUrls: ['./modif-add-proyecto.component.css']
})
export class ModifAddProyectoComponent implements OnInit {

  id: any;
  Data: any;
  public formProyecto!: FormGroup;
  formG() {
    this.formProyecto = new FormGroup({
      nombreProyecto: new FormControl(),
      descripcion: new FormControl()
    });
  }
  Titulo: string = 'Agregar Proyecto';
  Accion: string = 'Agregar';
  modoEdicion: number;
  constructor(
    private route: ActivatedRoute,
    private service: DatosService,
    private fb: FormBuilder,
    private router: Router) {
    this.id = this.route.snapshot.params['id']
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']
  }

  ngOnInit(): void {
    this.formG()
    console.log(this.modoEdicion)
    console.log(this.Accion)
    let tipo = '/proyecto/ver'
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      this.Titulo = 'Modificar Proyecto';
      this.Accion = 'Modificar'
      this.service.getId(tipo, this.id).subscribe((data: any) => {
        this.Data = data
        this.formProyecto = this.fb.group({
          nombreProyecto: [this.Data.nombreProyecto, [Validators.required]],
          descripcion: [this.Data.descripcion, [Validators.required]]
        });
      })
    }
    else {
      this.formProyecto = this.fb.group({
        nombreProyecto: [, [Validators.required]],
        descripcion: [, [Validators.required]]
      })
      this.Titulo = 'Agregar Proyecto';
      this.Accion = 'Agregar'
    }
  }
  public img: string = './assets/imagenes/foto.png'
  modificar() {
    let tipo = '/proyecto/crear'
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let proyecto1 = new Proyecto(this.id, this.formProyecto.value.nombreProyecto, this.formProyecto.value.descripcion)
      this.service.post(tipo, proyecto1)
      this.router.navigate(["/edit"])
    }
    else {
      let formacion1 = new Proyecto(null, this.formProyecto.value.nombreProyecto, this.formProyecto.value.descripcion)
      this.service.post(tipo, formacion1)
      this.router.navigate(["/edit"])

    }
  }

}
