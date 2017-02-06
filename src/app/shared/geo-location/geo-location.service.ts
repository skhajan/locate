import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GeoLocationService{


	constructor(
		public http: Http,
		@Inject("WEATHER_APP_KEY") public apiKey: string,
		@Inject("WEATHER_APP_URL") public apiUrl: string){
	}

	getParams(object: any): string {
		return `APPID=${this.apiKey}&`+(typeof object == "object"? 
			`lat=${object.latitude}&lon=${object.longitude}`: `q=${object}`);
	}

	getWeather(params: any): any {
		let queryUrl: string = `${this.apiUrl}?${this.getParams(params)}`;
		return this.http.get(queryUrl);
	}
}

export default GeoLocationService;