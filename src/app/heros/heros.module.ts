import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { MaterialModule } from '../material/material.module';

import { HerosPageComponent } from './pages/heros-page/heros-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HerosPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    MaterialModule
  ]
})
export class HerosModule { }