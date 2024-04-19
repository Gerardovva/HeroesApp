import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems=[
    {label:'Listado',icom:'label', url:'./list'},
    {label:'Añadir',icom:'add', url:'./new-hero'},
    {label:'Buscar',icom:'search', url:'./search'},

  ]

}
