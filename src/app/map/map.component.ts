import { Component, NgZone, OnInit } from '@angular/core';
import { GmapService } from 'app/_services/gmap.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
  ,providers: [GmapService]
})
export class MapComponent implements OnInit {
  lat: number = 0.0;
  lng: number = 0.0;
  zoom: number = 2;

  constructor(private gmapService: GmapService) {
    this.geocode();
  }

  ngOnInit() {
  }

  mapReady(map: any) {
  }

  geocode() {
    this.gmapService.geocode("85598 Baldham, Frühlingstr. 59c").then(
      location => {
        this.lat = location.lat();
        this.lng = location.lng();
        this.zoom = 18;
      },
      error => {
        // console.log(error);
        alert(error);
      }
    );
  }

  resetMarker() {
    this.lat =0;
    this.lng = 0;
    this.zoom = 2;
  }
}
