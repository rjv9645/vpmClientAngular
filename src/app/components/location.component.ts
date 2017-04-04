import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { CarouselModule } from 'ng2-bootstrap'
import { LocationService } from '../services/location.service'
import { LocationPojo } from '../objects/location.pojo'

@Component({
    selector: 'location',
    providers: [LocationService],
    template: `
    <carousel>
        <slide *ngFor="let address of addresses; let i = index;">
            <img class="img-fluid center-block" [src]="i === 0 ? 'http://assets1.ignimgs.com/2016/10/11/green-power-ranger-1280jpg-882d831280wjpg-fe19ee_1280w.jpg' :
            'https://s-media-cache-ak0.pinimg.com/564x/ee/5f/d8/ee5fd819e2a23b79fc398c68e659de75.jpg'">
            <div class="carousel-caption">
                <h3>{{address.address}}</h3>
                <p>{{address.city}}, {{address.state}}</p>
            </div>
        </slide>
    </carousel>`
})
export class LocationComponent implements OnInit{
    addresses:LocationPojo[];

    constructor(private locationService: LocationService){
       
    }

    ngOnInit(): void {
        if(navigator.geolocation)
        {
            navigator.geolocation
                .getCurrentPosition(this.getLocations.bind(this));          
        }
        else
        {
            console.log("Browser doesn't support geolocation. LocationComponent init.");
        }
    }

    //See location.service.ts
    getLocations(position: any){
        this.locationService.getLocations(
            position.coords.longitude,
            position.coords.latitude,
            40,
            "m"
        ).then(
            locations => this.addresses = locations
        );
    }
}