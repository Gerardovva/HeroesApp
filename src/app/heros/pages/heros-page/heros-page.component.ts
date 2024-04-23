import { ActivatedRoute, Router } from '@angular/router';
import { HeroesServices } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interface/hero.interface';

@Component({
  selector: 'app-heros-page',
  templateUrl: './heros-page.component.html',
  styles: [
  ]
})
export class HerosPageComponent implements OnInit {


  public hero?: Hero;

  constructor(
    private heroesServices: HeroesServices,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      delay(1000),
      switchMap(({ id }) => this.heroesServices.getHeroById(id)),

    ).subscribe(hero => {
      if (!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      return;
    })
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }


}
