import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  places:Place[];
  constructor(private placeService:PlacesService) { }
;

  ngOnInit() {
    this.places=this.placeService.getPlaces(); 
  }

}
