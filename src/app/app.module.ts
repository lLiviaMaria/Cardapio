import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { AboutComponent } from './home/pages/about/about.component';
import { ContatosComponent } from './home/pages/contatos/contatos.component';
import { CardapioComponent } from './home/pages/cardapio/cardapio.component';
import {HttpClientModule} from '@angular/common/http';
import { PoliticasComponent } from './home/pages/politicas/politicas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    ContatosComponent,
    CardapioComponent,
    PoliticasComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
