import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { FormatofechaPipe } from './pipes/formatofecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    FormatofechaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
