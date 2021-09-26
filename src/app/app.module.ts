import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaItensComponent } from './components/lista-itens/lista-itens.component';
import { CartaComponent } from './components/carta/carta.component';
import { CorCartaPipe } from './pipes/cor-carta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaItensComponent,
    CartaComponent,
    CorCartaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
