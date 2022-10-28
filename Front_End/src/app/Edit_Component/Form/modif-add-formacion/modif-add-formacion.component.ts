import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';
import { Formacion } from 'src/app/Model/formacion.model';

@Component({
  selector: 'app-modif-add-formacion',
  templateUrl: './modif-add-formacion.component.html',
  styleUrls: ['./modif-add-formacion.component.css']
})
export class ModifAddFormacionComponent implements OnInit {

  id: any;
  Data: any;
  public formFormacion!: FormGroup;
  formG() {
    this.formFormacion = new FormGroup({
      fechaInicio: new FormControl(),
      fechaFinal: new FormControl(),
      carrera: new FormControl()
    });
  }
  Titulo: string = 'Agregar Formacion';
  Accion: string = 'Agregar'
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
    console.log(Date())
    this.formG()
    let tipo = '/formacion/ver'
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.Titulo = 'Modificar Formacion';
      this.Accion = 'Modificar'
      this.service.getId(tipo, this.id).subscribe((data: any) => {
        this.Data = data
        this.formFormacion = this.fb.group({
          fechaInicio: [this.Data.fechaInicio, [Validators.required]],
          fechaFinal: [this.Data.fechaFinal, [Validators.required]],
          carrera: [this.Data.carrera, [Validators.required]],
        });
      })
    }
    else {
      this.formFormacion = this.fb.group({
        fechaInicio: [, [Validators.required]],
        fechaFinal: [, [Validators.required]],
        carrera: [, [Validators.required]],
      })
      this.Titulo = 'Agregar Formacion';
      this.Accion = 'Agregar'
    }


  }
  act:boolean = false;
  actual(event:any){
    console.log(event.target.checked)
    this.act = event.target.checked
    if(event.target.checked == true ){
      this.formFormacion.value.fechaFinal="Actualmente"
    }
  }
  public img: string = './assets/imagenes/foto.png'
  modificar() {
    let tipo = '/formacion/crear'
    if( this.formFormacion.value.fechaFinal == null ){
        this.formFormacion.value.fechaFinal="Actualmente";
    if (this.modoEdicion != null && this.modoEdicion === 1) {

      
      
      let formacion1 = new Formacion(this.id, this.formFormacion.value.fechaInicio, this.formFormacion.value.fechaFinal, this.formFormacion.value.carrera)
      this.service.post(tipo, formacion1)
      this.router.navigate(["/edit"])
      
      console.log(formacion1)
    }
    else {
      let formacion1 = new Formacion(null, this.formFormacion.value.fechaInicio, this.formFormacion.value.fechaFinal, this.formFormacion.value.carrera)
      this.service.post(tipo, formacion1)
      this.router.navigate(["/edit"])
      

    }
    }
  }

  cancelar(){
    this.router.navigate(["/edit"])
  }


}
