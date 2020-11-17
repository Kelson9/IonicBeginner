import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private places:Place[]=[

new Place(
'p1',
'Twin Mission',
'At the centre of Buea',
'https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg',
12334

),
new Place(

  'p2',
  'Molyko',
  'At the core of Buea',
  'https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/creer-un-restaurant/creer-un-restaurant.jpg',
  3222  
),
new Place(

  'p3',
  'UB',
  'At the core of Buea',
  'https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg',
  332  
)
];


getPlaces(){
return [...this.places];

}

getPlace(id:string){
return {...this.places.find(p=>p.id==id)};

}

  constructor() { }
}
