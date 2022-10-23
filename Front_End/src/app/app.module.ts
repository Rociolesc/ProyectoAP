import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPerfilComponent } from './Edit_Component/edit-perfil/edit-perfil.component';
import { EditExperienciaComponent } from './Edit_Component/edit-experiencia/edit-experiencia.component';
import { EditFormacionComponent } from './Edit_Component/edit-formacion/edit-formacion.component';
import { EditHabilidadComponent } from './Edit_Component/edit-habilidad/edit-habilidad.component';
import { EditProyectoComponent } from './Edit_Component/edit-proyecto/edit-proyecto.component';
import { ModifAddPerfilComponent } from './Edit_Component/Form/modif-add-perfil/modif-add-perfil.component';
import { ModifAddExperienciaComponent } from './Edit_Component/Form/modif-add-experiencia/modif-add-experiencia.component';
import { ModifAddFormacionComponent } from './Edit_Component/Form/modif-add-formacion/modif-add-formacion.component';
import { ModifAddHabilidadComponent } from './Edit_Component/Form/modif-add-habilidad/modif-add-habilidad.component';
import { ModifAddProyectoComponent } from './Edit_Component/Form/modif-add-proyecto/modif-add-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPerfilComponent,
    EditExperienciaComponent,
    EditFormacionComponent,
    EditHabilidadComponent,
    EditProyectoComponent,
    ModifAddPerfilComponent,
    ModifAddExperienciaComponent,
    ModifAddFormacionComponent,
    ModifAddHabilidadComponent,
    ModifAddProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
