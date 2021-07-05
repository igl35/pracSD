export class Usuario {
    _id: string;
    email: string;
    telefono: Number;
    password: string;

    constructor(_id = '', email = '', telefono=0, password=''){
        this._id= _id; 
        this.email= email; 
        this.telefono = telefono; 
        this.password = password; 
    }
}
