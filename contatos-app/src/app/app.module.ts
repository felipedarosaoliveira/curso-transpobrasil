import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoFormComponent } from './contatos/contato-form/contato-form.component';
import { ContatoListComponent } from './contatos/contato-list/contato-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoFormComponent,
    ContatoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
