import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
//import { NgForm } from '@angular/forms';
import { Banco } from 'src/app/models/banco';
import { BancoService } from 'src/app/services/banco.service';

declare var M: any;

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [BancoService]
})
export class BancoComponent implements AfterViewInit {

  /*constructor(public bancoService: BancoService, public router: Router) { }

  
  ngOnInit() {
    this.getBancos();
  }

  getBancos(){
    this.bancoService.getBancos()
      .subscribe(res => {
        this.bancoService.bancos = res as Banco[];
        console.log(res);
      });
  }

  reserva(){
    this.bancoService.reserva()
      .subscribe(
        res => {
          M.toast({html: 'Transacción realizada'});
          M.toast({html: 'Volviendo a home...'});
          setTimeout(() => { window.location.href='https://172.20.10.3:4200/home'}, 1500);
        },
        err => {
          M.toast({html: 'Operación cancelada'});
        }
      )
  }*/

  @ViewChild('cardInfo') cardInfo: ElementRef;
  cardError: string;
  card: any;

  constructor(
    private ngZone: NgZone,
    private bancoService: BancoService
  ){}

  ngAfterViewInit(){
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.onChange.bind(this));
  }

  onChange(error){
    if(error){
      this.ngZone.run(()=> this.cardError = error.message);
    }
    else{
      this.ngZone.run(()=> this.cardError = "");
    }
  }

  async onClick(){
    const{ token, error } = await stripe.createToken(this.card);
    if(token){
      await this.bancoService.charge(48, token.id);
    }
    else{
      this.ngZone.run(()=> this.cardError = error.message);
    }
  }

}