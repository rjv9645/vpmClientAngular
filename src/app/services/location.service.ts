import { Injectable } from '@angular/core'
import { Http, Response, 
         Headers, RequestOptions} from '@angular/http'
import { LocationPojo } from '../objects/location.pojo'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class LocationService {

    private locationsUrl ="http://localhost:8080/api/v1/locations/radius/";

    constructor(private _http: Http){

    }

    /**
     * Gets all properties in the Property
     * management database within 'distance' 
     * of the given longitude and latitude.
     * 'distance' will be in 'units'. 
     * Ie 'm' = miles, 'km' = kilometers.
     */
    getLocations(longitude: number,
                 latitude: number,
                 distance: number,
                 units: String) : Promise<LocationPojo[]> 
    {
        var restUrl = this.locationsUrl + longitude +"/" +
            latitude + "/" + distance + "/" + units;
        console.log("Calling service: " + restUrl);
        return Promise.resolve(
            this._http.get(restUrl)
                .toPromise()
                .then(res => res.json() as LocationPojo[])
        );
    }
}