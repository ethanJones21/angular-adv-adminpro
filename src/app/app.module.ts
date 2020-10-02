import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { PagesModule } from './pages/pages.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

// Componentes
import { IncrementadorComponent } from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AuthRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
