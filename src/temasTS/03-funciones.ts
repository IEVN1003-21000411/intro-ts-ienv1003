
function suma (a:number, b:number):number{
    return a + b;
}

const result = suma(23,45);
console.log(result);


const sumaFlecha = (c:number, k:number): number => c + k;
console.log(sumaFlecha(5,65));

function multiplicar(n1:number, n2?:number,base:number = 2):number{
    return n1 * base;
}

console.log(multiplicar(5,10));
console.log(multiplicar(5,undefined,10));
console.log(multiplicar(5));




interface Mascota{
    nombre:string,
    edad:number,
    tipo:string,
    mostrarEdad:()=>void,
};

function crearMascota(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostrarEdad())
}

const mascota:Mascota = {
    nombre:'Luna',
    edad:3,
    tipo:'perro',
    mostrarEdad(){
        return  `la edad de ${this.nombre} es ${this.edad} años`;
    }
}

const M = crearMascota(mascota,5);
console.log(M);





