import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Coche } from 'src/app/models/coche';
import { CocheService } from '../../services/coche.service'; 
import { NgForm } from '@angular/forms'; 

declare var M: any; 

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'], 
  providers: [CocheService]
})
export class CochesComponent implements OnInit {
  carros: any; 

  constructor(public cocheService: CocheService, public router: Router) { }

  ngOnInit()  {
    this.getCarros(); 
  }

  addCoche(form: NgForm){
    
    this.cocheService.postCoches(form.value)
     .subscribe(res => {
       this.resetForm(form);  
       M.toast({html: 'Guardado de forma correcta'}); 
       this.getCarros(); 
     }); 
     
    //console.log(form.value); 
  }


  getCarros() {
    this.cocheService.getCoches()
    .subscribe(res => {
      this.cocheService.coches = res as Coche[]; // mesale error
      console.log(res); 
    });
  }
  
  resetForm(form?: NgForm){
    if(form){
      form.reset(); 
      this.cocheService.selectedCoche = new Coche(); 
    }
  }
  
}