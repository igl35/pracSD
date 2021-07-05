import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Coche } from '../models/coche';
import { CochesComponent } from '../components/coches/coches.component'
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

@Injectable({
  providedIn: 'root'
})
export class CocheService {
 
  selectedCoche: Coche; 
  coches: Coche[]; 
  URL_API = 'http://localhost:3001/api/coche'; //s
  constructor(private http: HttpClient) { 
    this.selectedCoche = new Coche(); 
  }

  llamada(_id: string){ //creo que esto no llama bien 
    //console.log("segundo")
    console.log(_id)
    return this.http.get(this.URL_API + '/llamada/primero' + `/${_id}`); 
    //return this.http.get('https://localhost:3001/api/coche/llamada/primero/60deeebb0e3105e71475ef80')
  }

  getCoches(){
    return this.http.get(this.URL_API); 
  }

  postCoches(Coche: Coche){
    return this.http.post(this.URL_API, Coche); 
  }

  putCoche(Coche: Coche){
    //return this.http.get(this.URL_API + '/llamada/primero' + `/${Coche._id}`); //aqui si va
    return this.http.put(this.URL_API + `/${Coche._id}`, Coche); //me salta error aqui
  }

  deleteCoche(_id: string, price: number) {
    console.log(price)
    return this.http.get(this.URL_API + '/llamada/primero' + `/${_id}/${price}`); 
    //return this.http.delete(this.URL_API + `/${_id}`); // este no me salta
  }

  deleteCoche2(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
