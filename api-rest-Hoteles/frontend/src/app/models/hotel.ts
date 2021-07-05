export class Hotel {

    _id: string; 
    nombre: string; 
    entrada: string; 
    salida: string; 
    habitacion: string; 
    ciudad: string; 
    precio: number; 

    constructor(_id = '', nombre= '', entrada = '', salida='', habitacion='', ciudad='', precio=0){
        this._id= _id; 
        this.nombre = nombre; 
        this.entrada = entrada;  
        this.salida = salida; 
        this.habitacion = habitacion;  
        this.ciudad = ciudad;  
        this.precio = precio;  
    }

}
