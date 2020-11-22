import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import {SegmentChangeEventDetail} from '@ionic/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  places:Place[];
  listedLoadePlaces:Place[];
  constructor(private placeService:PlacesService,private menuCtrl:MenuController) { }
;

  ngOnInit() {
    this.places=this.placeService.getPlaces(); 
    this.listedLoadePlaces=this.places.slice[1];
  }

  onFilterUpdate(event:CustomEvent<SegmentChangeEventDetail>)
{

  console.log(event.detail);
}
}
