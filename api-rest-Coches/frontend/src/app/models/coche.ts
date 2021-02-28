export class Coche {

    _id: string; 
    marca: string; 
    modelo: string; 
    picture: string; 
    price: number; 
    category: string; 
    description: string; 
    fechaInicial: string; 
    fechaFinal: string; 

    constructor(_id = '', marca = '', modelo='', picture='', price=0, category='', description='', fechaInicial='', fechaFinal='' ){
        this._id= _id; 
        this.marca= marca; 
        this.modelo = modelo; 
        this.picture = picture; 
        this.price = price; 
        this.category = category; 
        this.description = description; 
        this.fechaInicial = fechaInicial; 
        this.fechaFinal = fechaFinal; 
    }
 
}
