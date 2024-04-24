import { HeroesServices } from './../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap, tap } from 'rxjs';

import { Hero, Publisher } from '../../interface/hero.interface';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });


  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroesServices,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return; //SI NO INCLUYE LA PALABRA EDIT 
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroService.getHeroById(id)),
    ).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/');
      this.heroForm.reset(hero);
      return;
    });
  }


  get currenteHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currenteHero.id) {
      this.heroService.updateHero(this.currenteHero).subscribe(hero => {
        //TODO: Mostrar snackbar
        this.showSnackbar(`${hero.superhero} update!`);
      });

      return;
    }

    this.heroService.addHero(this.currenteHero).subscribe(hero => {
      //TODO:mostrar snakbar, y navegar a /heroes/edit/hero.id
      this.router.navigate(['/heroes/edit', hero.id])
      this.showSnackbar(`${hero.superhero} created!`);

    })
  }

  onDeleteHero() {
    if (!this.currenteHero.id) throw Error('Hero id is requared');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result === true),
        switchMap(() => this.heroService.delateHeroById(this.currenteHero.id)),
        filter((wasDelete: boolean) => wasDelete),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes/list'])

      })

    /*dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.heroService.delateHeroById(this.currenteHero.id).subscribe( wasDelate => {
        if(wasDelate==true){
          this.router.navigate(['/heroes/list'])
        }
      })
    });*/

  }

  showSnackbar(messege: string): void {
    this.snackbar.open(messege, 'done', {
      duration: 2500,
    })
  }
}
