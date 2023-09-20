import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { FacilitiesCardComponent } from './components/facilities-card/facilities-card.component';
import { BenefitsCardComponent } from './components/benefits-card/benefits-card.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HighlightCardComponent,
    FacilitiesCardComponent,
    BenefitsCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
