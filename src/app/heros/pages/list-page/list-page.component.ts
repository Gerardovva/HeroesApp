import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface';
import { HeroesServices } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private heroesServices: HeroesServices) { }

  ngOnInit(): void {
    this.heroesServices.getHeros().subscribe(heroes => this.heroes = heroes);
  }

}
