import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';


declare var google: any;

@Injectable()
export class GmapService extends GoogleMapsAPIWrapper {
    private _geocoder: Promise<any>;
    private _geocoderResolver: (value?: any) => void;

    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);

        this._geocoder = new Promise<any>((resolve: () => void) => { this._geocoderResolver = resolve; });

        this.__loader.load().then(() => {
            // from here on, we know that Google Maps API has been loaded
            let geocoder = new google.maps.Geocoder();
            // resolve all promises for geocoder requests
            this._geocoderResolver(geocoder);
            return;
        });
    }

    geocode(address: string) : Promise<any> {
        return new Promise<any>((resolve, reject) => {  
            this._geocoder.then((geocoder: any) => {
                geocoder.geocode( {'address': address}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        resolve(results[0].geometry.location);
                    } else {
                        reject(status);
                    }
                });
            });
        });
    }
}