import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroe.services';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  
  heroes:Heroe;

  constructor( private heroesService: HeroesService

      ) { }

  ngOnInit(): void {
  }

}
