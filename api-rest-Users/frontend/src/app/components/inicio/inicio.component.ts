import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public reservaService: ReservaService, public router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.usuarioService.logoutUsuario();
  }

}
