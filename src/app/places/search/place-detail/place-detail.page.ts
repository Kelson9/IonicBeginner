import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router:Router, private navCtrl:NavController,private modalCtrl:ModalController,private actionSheetCtrl:ActionSheetController ) { }
place:Place;
  ngOnInit() {
  }

  onBookPlace(){

    // this.router.navigateByUrl('/places/tabs/search');
    // this.navCtrl.navigateBack('/places/tabs/search');
    this.actionSheetCtrl.create({

header:'choose an A ction',
buttons:
[
  {
text:'Select Date '
  },
  {
text:'Random Date',
handler:()=>{

}

  },
  {
text:'Cancel',
role:'cancel'
  }

]
});
}


  openBookingModal(mode:'select' | 'random'){
console.log(mode);
this.modalCtrl.create({component:CreateBookingComponent,componentProps:{selectedPlace:this.place}})
.then(modalEl=>{
  modalEl.present();
  modalEl.onDidDismiss();
// })
//   .then(resultData=>{
// console.log(resultData.data,resultData.role);
// if(resultData.role==='confirm'){
//   console.log('BOOKED'); 
// }
});


}

  }
