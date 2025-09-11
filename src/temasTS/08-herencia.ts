

class Persona3{
    protected nombre:string;
    protected edad:number;
    protected direccion:string;

    constructor(nombre:string, edad:number, direccion:string){
        this.nombre=nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    mostrarPersona(){
        console.log(`Nombre ${this.nombre}, 
            Edad ${this.edad},
            Direccion ${this.direccion}`);
    }
}

//La palabra reservada de extends es por que va heredar los parametos de el papa que es Persona3
class Empleado3 extends Persona3{
    private salario: number;

    constructor(nombre:string,edad:number,direccion:string,salario:number){
        super(nombre,edad,direccion)//Estamos inicializado de la intacia con el padre que va esta heredando esto para utilizar el this
        this.salario = salario;
    }
    imprimir(){//Esto es para lo que va mostrar cuando el contructor resiva los parametros
        if(this.salario > 1500){
            console.log(`Empleado: ${this.nombre}, Salario: ${this.salario}`);
        }else{
            console.log('No tiene salario sufiente');
        }
    }
}

const persona3 = new Persona3 ('Juan',30,'Calle 123');
persona3.mostrarPersona();
const empelado3 = new Empleado3 ('Pedro',45,'Avenida 456', 1600);
empelado3.imprimir();

