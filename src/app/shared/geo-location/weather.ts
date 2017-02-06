export class Weather {
  id: string;
  city: string;
  country: string;
  currentDate: any;
  sunrise: any;
  sunset: any;
  wind: any;
  temprature: any;
  cloud: any;
  weatherIcon: string;

  constructor(obj?: any) {
    this.id             = obj && obj.id           					|| null;
    this.city           = obj && obj.name          					|| null;
    this.country     	= obj && obj.sys.country    				|| null;
    this.currentDate    = obj && new Date(obj.dt * 1000)			|| null;
    this.sunrise        = obj && new Date(obj.sys.sunrise * 1000)	|| null;
    this.sunset 		= obj && new Date(obj.sys.sunset * 1000)  	|| null;
    this.wind 			= obj && obj.wind 							|| null; 
    this.temprature		= obj && obj.main 							|| null;
    this.cloud 			= obj && obj.cloud 							|| null;

    let icon = obj.weather[0].main.toLowerCase(), iconLength = icon.length - 1;
    this.weatherIcon 	= obj && icon.charAt(iconLength) == "s" ? icon.substring(0, iconLength): icon 	|| null;
    this.temprature.farenhight = ((obj.main.temp - 273.15) * 9/5 + 32).toFixed(1);
  }
}

export default Weather;