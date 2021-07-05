import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    
    this.usuarioService.loginUsuario()
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inicio']);
        },
        err => {
          M.toast({html: 'Error en la autentificación'});
        }
      )
  }

}
