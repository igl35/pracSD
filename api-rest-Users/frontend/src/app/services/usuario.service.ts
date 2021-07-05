import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
//import { RegistroComponent } from '../components/registros/registro.component'; 
import { Observable } from 'rxjs/internal/Observable';
//import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario: Usuario;
  usuarios: Usuario[];
  readonly URL_API = 'https://localhost:3001/api/usuarios';  //'https://192.168.100.42:3000/api/usuarios';
  readonly URL_API_HOME =  'https://localhost:3001/api/inicio';  //'https://192.168.100.42:3000/api/inicio';

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getHome(){
    return this.http.get(this.URL_API_HOME);
  }

  loginUsuario(){
    return this.http.post<any>(this.URL_API + '/login', this.selectedUsuario);
  } //<any>

  logoutUsuario(){
    return localStorage.removeItem('token');
  }

  getUsuarios(){
    return this.http.get(this.URL_API);
  }

  postUsuario(Usuario: Usuario){
    console.log(Usuario);
    return this.http.post(this.URL_API, Usuario);
    //return this.http.post('https://localhost:3001/api/createuser', Usuario);
  }

  putUsuario(usuario: Usuario){
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}