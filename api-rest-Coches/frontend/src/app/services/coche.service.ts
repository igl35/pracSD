import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Coche } from '../models/coche';
import { CochesComponent } from '../components/coches/coches.component'

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  selectedCoche: Coche; 
  coches: Coche[]; 
  readonly URL_API = 'https://localhost:3001/api/coche'; 
  constructor(private http: HttpClient) { 
    this.selectedCoche = new Coche(); 
  }

  getCoches(){
    return this.http.get<Coche[]>(this.URL_API); 
  }

  postCoches(Coche: Coche){
    return this.http.post(this.URL_API, Coche); 
  }

  putCoche(coche: Coche){
    return this.http.put(this.URL_API + `/${coche._id}`, coche); 
  }

  deleteCoche(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`); 
  }
}
