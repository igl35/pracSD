import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

declare var M: any; 
@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'], 
  providers: [UsuarioService]
})
export class RegistrosComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }

  addUsuario(form: NgForm){
    if(form.value._id){
      this.usuarioService.putUsuario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Actualizado con éxito!'});
      })
    }
    else{
    this.usuarioService.postUsuario(form.value)
      .subscribe((res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      })
    }
  }

  editUsuario(usuario: Usuario){
    this.usuarioService.selectedUsuario = usuario;
  }

  deleteUsuario(_id: string){
    if(confirm('¿Seguro que desea eliminar el usuario?')){
      this.usuarioService.deleteUsuario(_id)
        .subscribe(res => {
          M.toast({html: 'Eliminado con éxito!'});
        }) 
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }  
  }

}
