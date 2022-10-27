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
import { BannerComponent } from './Header/banner/banner.component';
import { MenuComponent } from './Header/menu/menu.component';
import { NavComponent } from './Header/nav/nav.component';
import { FondoComponent } from './Header/fondo/fondo.component';
import { PublicPerfilComponent } from './Public_Component/public-perfil/public-perfil.component';
import { PublicExperienciaComponent } from './Public_Component/public-experiencia/public-experiencia.component';
import { PublicFormacionComponent } from './Public_Component/public-formacion/public-formacion.component';
import { PublicHabilidadComponent } from './Public_Component/public-habilidad/public-habilidad.component';
import { PublicProyectoComponent } from './Public_Component/public-proyecto/public-proyecto.component';
import { LoginComponent } from './Auth/login/login.component';
import { FrontBodyComponent } from './Body/front-body/front-body.component';
import { PublicBodyComponent } from './Body/public-body/public-body.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ErrorComponent } from './error/error.component';

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
    ModifAddProyectoComponent,
    BannerComponent,
    MenuComponent,
    NavComponent,
    FondoComponent,
    PublicPerfilComponent,
    PublicExperienciaComponent,
    PublicFormacionComponent,
    PublicHabilidadComponent,
    PublicProyectoComponent,
    LoginComponent,
    FrontBodyComponent,
    PublicBodyComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
