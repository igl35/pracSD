import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Vuelo } from 'src/app/models/vuelo';
import { VueloService } from '../../services/vuelo.service'; 
import { NgForm } from '@angular/forms'; 

declare var M: any; 


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'], 
  providers: [VueloService]
})
export class VuelosComponent implements OnInit {
  //coches : Coche[]; 

  constructor(public vueloService: VueloService, public router: Router) { }

  ngOnInit()  {
    this.getVuelos(); 
  }

  addVuelo(form: NgForm){ 
    
    if(form.value._id){ // el problema está aquí
      console.log(form.value);
      this.vueloService.putVuelo(form.value)
      .subscribe(res =>{
        console.log(res);
      })
    } else{
      this.vueloService.postVuelos(form.value)
      .subscribe(res => {
        this.resetForm(form);  
        M.toast({html: 'Guardado de forma correcta'}); 
        this.getVuelos(); 
      }); 
    //console.log(form.value);
    }
    
     
  }

  editVuelo(vuelo: Vuelo){
    this.vueloService.selectedVuelo = vuelo ;
  }

  deleteVuelo(_id: string){
    this.vueloService.deleteVuelo(_id)
    .subscribe(res => {
      //console.log(res);
      this.getVuelos();
    })
  }


  deleteCoche(_id: string, price: number){
    this.vueloService.deleteCoche(_id, price)
    .subscribe(res => {
      //console.log(res);
      this.getVuelos();
    })
  }

  deleteCoche2(_id: string){
    this.vueloService.deleteCoche2(_id)
    .subscribe(res => {
      //console.log(res);
      this.getVuelos();
    })
  }

  getVuelos() {
    this.vueloService.getVuelos()
    .subscribe(res => {
      this.vueloService.vuelos = res as Vuelo[];// mesale error
      console.log(this.vueloService.vuelos); 
    });
  }
  
  resetForm(form?: NgForm){
    if(form){
      form.reset(); 
      this.vueloService.selectedVuelo = new Vuelo(); 
    }
  }
  
}
