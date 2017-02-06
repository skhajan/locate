import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { GeoLocationService } from './geo-location.service';
import Weather from './weather';

@Component({
  selector: 'geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.css'],
  providers: [GeoLocationService]
})
 
export class GeoLocationComponent{

	@Input() location;
	weekdays: any;
	weather: any;

	constructor(private _geoService: GeoLocationService) {
		this.weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	}

	loadWeather(): void {
		var _this = this;
		this._geoService.getWeather(this.location)
			.subscribe(function(response){
				_this.weather = new Weather(JSON.parse(response._body));
			});
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}){
		for (let prop in changes) {
			if(prop == "location" && changes[prop].currentValue){
				this.loadWeather();
			}
		}
	}

	isCurrentDay(timestamp, index): boolean{
		return new Date(timestamp).getDay() == index; 
	}

}

