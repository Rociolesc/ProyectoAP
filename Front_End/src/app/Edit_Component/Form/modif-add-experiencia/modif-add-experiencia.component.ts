import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/data.service';
import { Experiencia } from 'src/app/Model/experiencia.model';

@Component({
  selector: 'app-modif-add-experiencia',
  templateUrl: './modif-add-experiencia.component.html',
  styleUrls: ['./modif-add-experiencia.component.css']
})
export class ModifAddExperienciaComponent implements OnInit {

  
  id: any;
  Data: any;
  public formExperiencia!: FormGroup;
  formG() {
    this.formExperiencia = new FormGroup({
      fechaInicio: new FormControl(),
      fechaFinal: new FormControl(),
      nombreEmpresa: new FormControl(),
      puesto: new FormControl()
    });
  }
  Titulo: string = 'Agregar Experiencia';
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
    this.formG()
   
    let tipo = '/experiencia/ver'
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.Titulo = 'Modificar Experiencia';
      this.Accion = 'Modificar'
      this.service.getId(tipo, this.id).subscribe((data: any) => {
        this.Data = data
console.log(this.Data)
        this.formExperiencia = this.fb.group({
          fechaInicio:[this.Data.fechaInicio, [Validators.required]],
          fechaFinal:[this.Data.fechaFinal, [Validators.required]],
          nombreEmpresa:[this.Data.nombreEmpresa, [Validators.required]],
          puesto:[this.Data.puesto, [Validators.required]],
        });
      })
    }
    else {
      this.Titulo = 'Agregar Experiencia';
      this.Accion = 'Agregar'
      this.formExperiencia = this.fb.group({
        fechaInicio: [, [Validators.required]],
        fechaFinal: [, [Validators.required]],
        nombreEmpresa: [, [Validators.required]],
        puesto: [, [Validators.required]],
      })
      
    }
  }

  act:boolean = false;
  actual(event:any){
    console.log(event.target.checked)
    this.act = event.target.checked
    if(event.target.checked == true){
      this.formExperiencia.value.fechaFinal="Actualmente"
    }
  }
  public img: string = './assets/imagenes/foto.png'
  modificar(){
    let tipo = '/experiencia/crear'
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let experiencia1 = new Experiencia(this.id,this.formExperiencia.value.fechaInicio,this.formExperiencia.value.fechaFinal,this.formExperiencia.value.nombreEmpresa,this.formExperiencia.value.puesto)
      console.log(experiencia1)
      this.service.post(tipo, experiencia1)
      this.router.navigate(["/edit"])
    }
    else {
      let experiencia1 = new Experiencia(null,this.formExperiencia.value.fechaInicio,this.formExperiencia.value.fechaFinal,this.formExperiencia.value.nombreEmpresa,this.formExperiencia.value.puesto)
      this.service.post(tipo, experiencia1)
      this.router.navigate(["/edit"])

    }
  }


}
