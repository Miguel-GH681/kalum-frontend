import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarreraTecnicaComponent } from "./components/carrera-tecnica/carrera-tecnica.component";
import { HomeComponent } from "./components/home/home.component";
import { InscripcionComponent } from "./components/inscripcion/inscripcion.component";
import { LoginComponent } from "./components/login/login.component";

const routes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'carreraTecnica', component: CarreraTecnicaComponent },
    { path: 'inscripcion', component: InscripcionComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}