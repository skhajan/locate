import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GeoLocationComponent } from './shared/geo-location/geo-location.component';

const WEATHER_APP_KEY: string = "29c56c31ac48465a798dc74728f5b2e7";
const WEATHER_APP_URL: string = "http://api.openweathermap.org/data/2.5/weather";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GeoLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'WEATHER_APP_KEY', useValue: WEATHER_APP_KEY}, 
    {provide: 'WEATHER_APP_URL', useValue: WEATHER_APP_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
