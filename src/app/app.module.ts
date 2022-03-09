import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSliderModule} from '@angular/material/slider';
import { SidebarComponent } from './sidebar/sidebar.component';

//Inicio Servicios
import {CargarScriptsService} from './cargar-scripts.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, HttpClientModule,MatSliderModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
