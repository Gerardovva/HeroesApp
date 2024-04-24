import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HerosRoutingModule } from './heros-routing.module';
import { MaterialModule } from '../material/material.module';

import { HerosPageComponent } from './pages/heros-page/heros-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { HeroImaePipe } from './pipes/hero-imae.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    HerosPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroImaePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HerosModule { }
