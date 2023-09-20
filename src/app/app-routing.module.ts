import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/pages/about/about.component';
import { ContatosComponent } from './home/pages/contatos/contatos.component';
import { BodyComponent } from './shared/components/body/body.component';
import { CardapioComponent } from './home/pages/cardapio/cardapio.component';
import { PoliticasComponent } from './home/pages/politicas/politicas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: 'body', pathMatch:'full'},
  {  path:'body', component:BodyComponent},
{  path:'about', component:AboutComponent},
{  path:'contatos', component:ContatosComponent},
{path:'cardapio', component:CardapioComponent},
{path:'politicas', component:PoliticasComponent},
{ path: '**', component:PageNotFoundComponent}, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
