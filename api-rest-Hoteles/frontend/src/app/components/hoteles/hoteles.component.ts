import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from '../../services/hotel.service'; 
import { NgForm } from '@angular/forms'; 

declare var M: any; 


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css'], 
  providers: [HotelService]
})
export class HotelesComponent implements OnInit {
  //coches : Coche[]; 

  constructor(public hotelService: HotelService, public router: Router) { }

  ngOnInit()  {
    this.getHoteles(); 
  }

  addHotel(form: NgForm){ 
    
    if(form.value._id){ // el problema está aquí
      console.log(form.value);
      this.hotelService.putHotel(form.value)
      .subscribe(res =>{
        console.log(res);
      })
    } else{
      this.hotelService.postHoteles(form.value)
      .subscribe(res => {
        this.resetForm(form);  
        M.toast({html: 'Guardado de forma correcta'}); 
        this.getHoteles(); 
      }); 
    //console.log(form.value);
    }
    
     
  }

  editHotel(hotel: Hotel){
    this.hotelService.selectedHotel = hotel ;
  }
/*
  deleteHotel(_id: string){
    this.hotelService.deleteHotel(_id)
    .subscribe(res => {
      //console.log(res);
      this.getHoteles();
    })
  }
*/
  deleteCoche(_id: string, precio: number){
    this.hotelService.deleteCoche(_id, precio)
    .subscribe(res => {
      //console.log(res);
      this.getHoteles();
    })
  }

  deleteCoche2(_id: string){
    this.hotelService.deleteCoche2(_id)
    .subscribe(res => {
      //console.log(res);
      this.getHoteles();
    })
  }

  getHoteles() {
    this.hotelService.getHoteles()
    .subscribe(res => {
      this.hotelService.hoteles = res as Hotel[];// mesale error
      console.log(this.hotelService.hoteles); 
    });
  }
  
  resetForm(form?: NgForm){
    if(form){
      form.reset(); 
      this.hotelService.selectedHotel = new Hotel(); 
    }
  }
  
}