import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Vuelo } from '../models/vuelo';
import { VuelosComponent } from '../components/vuelos/vuelos.component'
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VueloService {
 
  selectedVuelo: Vuelo; 
  vuelos: Vuelo[]; 
  readonly URL_API = 'http://localhost:3005/api/vuelo'; 
  constructor(private http: HttpClient) { 
    this.selectedVuelo = new Vuelo(); 
  }

  getVuelos(){
    return this.http.get(this.URL_API); 
  }

  postVuelos(Vuelo: Vuelo){
    return this.http.post(this.URL_API, Vuelo); 
  }

  putVuelo(Vuelo: Vuelo){
    return this.http.put(this.URL_API + `/${Vuelo._id}`, Vuelo); //me salta error aqui
  }

  deleteVuelo(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`); // este no me salta
  }

  deleteCoche(_id: string, price: number) {
    return this.http.get(this.URL_API + '/llamada/primero' + `/${_id}/${price}`); 
    //return this.http.delete(this.URL_API + `/${_id}`); // este no me salta
  }

  deleteCoche2(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
