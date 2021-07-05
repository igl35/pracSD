import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../models/banco';

declare var M: any;

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  /*selectedBanco: Banco;
  bancos: Banco[];
  readonly URL_API = 'https://192.168.100.42:3400/api/bancos';

  constructor(private http: HttpClient) {
    this.selectedBanco = new Banco();
  }

  getBancos(){
    return this.http.get(this.URL_API);
  }

  reserva(){
    return this.http.post<any>(this.URL_API + '/reserva', this.selectedBanco);
  }*/
  constructor(private http: HttpClient){

  }

  charge(cantidad, tokenId) {
    M.toast({html: 'Transacción realizada'});
    M.toast({html: 'Volviendo a home...'});
    setTimeout(() => { window.location.href='https://192.168.100.42:4200/home'}, 1500);
    return this.http.post('https://192.168.100.42:3400/stripe_checkout', {
      stripeToken: tokenId,
      cantidad: cantidad
    }).toPromise();
  }
}
