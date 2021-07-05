import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Coche } from 'src/app/models/coche';
import { CocheService } from '../../services/coche.service'; 
import { NgForm } from '@angular/forms'; 
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 
declare var M: any; 


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'], 
  providers: [CocheService]
})
export class CochesComponent implements OnInit {
  //coches : Coche[]; 

  constructor(public cocheService: CocheService, public router: Router) { }

  ngOnInit()  {
    this.getCarros(); 
  }

  addCoche(form: NgForm){ 
    
    if(form.value._id){ // el problema está aquí
      console.log(form.value);
      this.cocheService.putCoche(form.value)
      .subscribe(res =>{
        //console.log(res);
      })
    } else{
      this.cocheService.postCoches(form.value)
      .subscribe(res => {
        this.resetForm(form);  
        M.toast({html: 'Guardado de forma correcta'}); 
        this.getCarros(); 
      }); 
    //console.log(form.value);
    }
    
     
  }
/*
  llamada(form: NgForm){
    console.log("primero")
    this.cocheService.llamada(form.value); 
    console.log("terminado")
  }
*/

llamada(_id: string){
  console.log("primero")
  this.cocheService.llamada(_id); 
  console.log("terminado")
}

  editCoche(coche: Coche){
    this.cocheService.selectedCoche = coche ;
  }

  deleteCoche(_id: string, price: number){
    console.log(price)
    this.cocheService.deleteCoche(_id, price)
    .subscribe(res => {
      //console.log(res);
      this.getCarros();
    })
  }

  deleteCoche2(_id: string){
    this.cocheService.deleteCoche2(_id)
    .subscribe(res => {
      //console.log(res);
      this.getCarros();
    })
  }

  getCarros() {
    this.cocheService.getCoches()
    .subscribe(res => {
      this.cocheService.coches = res as Coche[];// mesale error
      console.log(this.cocheService.coches); 
    });
  }
  
  resetForm(form?: NgForm){
    if(form){
      form.reset(); 
      this.cocheService.selectedCoche = new Coche(); 
    }
  }
  
}
