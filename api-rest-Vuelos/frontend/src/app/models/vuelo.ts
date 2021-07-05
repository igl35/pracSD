export class Vuelo {

    _id: string; 
    name: string; 
    diaIda: string; 
    diaVuelta: string; 
    origen: string; 
    destino: string; 
    price: number; 
    category: string; 
    description: string; 

    constructor(_id = '', name = '', diaIda='', diaVuelta='', origen='', destino='', price=0, category='', description='' ){
        this._id= _id; 
        this.name= name; 
        this.diaIda = diaIda; 
        this.diaVuelta = diaVuelta; 
        this.origen = origen; 
        this.destino = destino; 
        this.price = price; 
        this.category = category; 
        this.description = description; 
    }
 
}