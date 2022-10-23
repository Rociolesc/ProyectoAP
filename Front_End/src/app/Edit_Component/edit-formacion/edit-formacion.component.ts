import { DatosService } from 'src/app/data.service';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-formacion',
  templateUrl: './edit-formacion.component.html',
  styleUrls: ['./edit-formacion.component.css']
})
export class EditFormacionComponent implements OnInit {

  
  Data: any;
  isValid:boolean | undefined;
  form: any;
  constructor(private route: ActivatedRoute,
    private renderer2: Renderer2,
    private service: DatosService,
    private router: Router
  ) {   this.form = this.route.snapshot.params['form']}
  public formacionLista: Array<any> = [];

  
  ngOnInit(): void {
    let tipo = '/formacion/ver'
    this.service.get(tipo).subscribe((data: any) => {
      this.formacionLista = data;
      if(data[0] === undefined){
        this.isValid = false;
        return
      }
      else{
        this.isValid = true;
      }
      console.log(this.formacionLista)
    });
  }

  public edit: boolean = false;
  public btn2: boolean = false;
  public btn1: boolean = true;


  Delete(id: any) {
    var opcion = confirm("Seguro desea eliminae este elemento");
    if (opcion === true) {
      let tipo = "formacion/borrar/" + id
      console.log(id)
      this.service.delete(tipo, id)
    }
    else {
      console.log('No se elimino nada')
    }
    location.reload()
  }
  Add() {
    this.router.navigate(["/edit/modificarFormacion"])
  }

}
