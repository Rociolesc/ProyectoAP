import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './Auth/login-component/login-component.component';
import { LoginComponent } from './Auth/login/login.component';
import { FrontBodyComponent } from './Body/front-body/front-body.component';
import { PublicBodyComponent } from './Body/public-body/public-body.component';
import { ModifAddExperienciaComponent } from './Edit_Component/Form/modif-add-experiencia/modif-add-experiencia.component';
import { ModifAddFormacionComponent } from './Edit_Component/Form/modif-add-formacion/modif-add-formacion.component';
import { ModifAddHabilidadComponent } from './Edit_Component/Form/modif-add-habilidad/modif-add-habilidad.component';
import { ModifAddPerfilComponent } from './Edit_Component/Form/modif-add-perfil/modif-add-perfil.component';
import { ModifAddProyectoComponent } from './Edit_Component/Form/modif-add-proyecto/modif-add-proyecto.component';
import { ErrorComponent } from './error/error.component';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const routes: Routes = [
  {path: "",component: PublicBodyComponent},
  {path: "edit",component: FrontBodyComponent,...canActivate(()=>redirectUnauthorizedTo(['/**']))},
  {path: "auth",component:LoginComponentComponent},
  {path: "login",component:LoginComponent },
  {
    path: "edit",component: FrontBodyComponent,...canActivate(()=>redirectUnauthorizedTo(['/**'])), children:[
      {path:'modificarPerfil/:id', component:ModifAddPerfilComponent},
      {path:'modificarFormacion', component:ModifAddFormacionComponent },
      {path:'modificarFormacion/:id', component:ModifAddFormacionComponent },
      {path:'modificarHabilidades', component:ModifAddHabilidadComponent },
      {path:'modificarHabilidades/:id', component:ModifAddHabilidadComponent },
      {path:'modificarProyecto', component:ModifAddProyectoComponent },
      {path:'modificarProyecto/:id', component:ModifAddProyectoComponent },
      {path:'modificarExperiencia', component:ModifAddExperienciaComponent },
      {path:'modificarExperiencia/:id', component:ModifAddExperienciaComponent },
    ]
  },
  {path: "**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
