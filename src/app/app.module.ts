import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Services} from "./services/services";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SectorSelectorComponent} from "./components/sector-selector/sector-selector.component";

@NgModule({
  declarations: [
    AppComponent,
    SectorSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
