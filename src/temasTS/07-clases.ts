
class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){//El constructor es como una funcion espera a que resiva parametros para poder despues utilizarlos en el codigo
        this.nombre = nombre;
        this.edad=edad;
    }

    imprimir(){
        console.log(`${this.nombre},${this.edad}`);
    }
}


let persona:Persona;//Iniciamos intacia con la calses
persona = new Persona('Tony',45);//El contructro  va resivir parametros como una funcion
persona.imprimir();
