import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Hotel } from '../models/hotel';
import { HotelesComponent } from '../components/hoteles/hoteles.component'
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HotelService {
 
  selectedHotel: Hotel; 
  hoteles: Hotel[]; 
  readonly URL_API = 'http://localhost:3004/api/hotel'; 
  constructor(private http: HttpClient) { 
    this.selectedHotel = new Hotel(); 
  }

  getHoteles(){
    return this.http.get(this.URL_API); 
  }

  postHoteles(Hotel: Hotel){
    return this.http.post(this.URL_API, Hotel); 
  }

  putHotel(Hotel: Hotel){
    return this.http.put(this.URL_API + `/${Hotel._id}`, Hotel); //me salta error aqui
  }
/*
  deleteHotel(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`); // este no me salta
  }
*/
  deleteCoche(_id: string, precio: number) {
    console.log("siiiiii entra")
    return this.http.get(this.URL_API + '/llamada/primero' + `/${_id}/${precio}`); 
    //return this.http.delete(this.URL_API + `/${_id}`); // este no me salta
  }

  deleteCoche2(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
