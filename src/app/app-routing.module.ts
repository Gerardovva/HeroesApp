import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'heroes',loadChildren:()=> import('./heros/heros.module').then(m => m.HerosModule)},
  {path:'404',component:Error404PageComponent},
  {path:'',redirectTo:'heroes',pathMatch:'full'},
  {path:'**',redirectTo:'404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
