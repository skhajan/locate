import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	isPermissionGranted: boolean;
	location: any; 
	value: string;

	constructor() {	}

	ngOnInit() {
		let self = this;
		let handlePosition = function (position){
			self.location = position.coords;
		}
		let handleError  = function (error){
			console.log(error);
			self.isPermissionGranted = !(error.PERMISSION_DENIED || error.POSITION_UNAVAILABLE || 
			error.PERMISSION_DENIED_TIMEOUT || error.UNKNOWN_ERROR)
		}
		
		navigator.geolocation.getCurrentPosition(handlePosition, handleError);
	}

	loadWeather(): void{
		this.location = this.value;
	}	
}
