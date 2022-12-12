import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarreraTecnica } from './carrera-tecnica.model';
import { CarreraTecnicaService } from './carrera-tecnica.service';

interface Responses {
  number: number,
  totalPage: number
  first: boolean,
  last: boolean,
  content: []
}

@Component({
  selector: 'app-carrera-tecnica',
  templateUrl: './carrera-tecnica.component.html',
  styles: [
  ]
})
export class CarreraTecnicaComponent implements OnInit {
  carrerasTecnicas: any[] = []

  constructor(private carreraTecnicaService : CarreraTecnicaService,
              private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let parametro = params.get('page');
      let page : number;
      if(!parametro){
        page = 0;
      } else {
        page = +parametro;
      }
      this.carreraTecnicaService.getCarrerasTecnicas(page).subscribe( (response : any) =>{
        this.carrerasTecnicas = response.content as CarreraTecnica[]
        console.log(this.carrerasTecnicas);
        
      })
    })
  }

}
