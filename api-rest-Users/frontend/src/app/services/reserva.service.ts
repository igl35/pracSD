import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../models/reserva';
//mport { RegistroComponent } from '../components/registros/registros.component'; 
import { Observable } from 'rxjs/internal/Observable';
//import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  selectedReserva: Reserva;
    reservas: Reserva[];
    readonly URL_API = 'https://172.20.10.3/api/reservas';
  
    constructor(private http: HttpClient) {
      this.selectedReserva = new Reserva();
    }
}
