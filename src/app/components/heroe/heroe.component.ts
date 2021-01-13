import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroe.services'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activateRoute: ActivatedRoute,
               private heroesServices: HeroesService
    ) { 

    this.activateRoute.params.subscribe( params =>{

      this.heroe = this.heroesServices.getheroe( params['id'] );

    } )
    

   }

}
