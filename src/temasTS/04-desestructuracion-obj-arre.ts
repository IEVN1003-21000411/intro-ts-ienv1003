
interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalle,
}

interface Detalle{
    autor:String,
    anio:number,
}

const reproducto:Reproductor = {
    volumen:90,
    segundo:36,
    cancion:'mess',
    detalles:{
        autor: 'Ed Sheeran',
        anio: 2015
    }
};


const{
    volumen,
    segundo,
    cancion,
    detalles
}=reproducto

const{
    autor,
    anio,
}=detalles

console.log("Autor es:",autor,"El año es:",anio);
console.log("Volumen es:",volumen,"el segundo:",segundo,"cancion:",cancion);



console.log("El volumen actual es de:", reproducto.volumen);
console.log("El segundo actual es de:",reproducto.segundo);
console.log("La cancion actual es de:", reproducto.cancion);
console.log("El autor es:",reproducto.detalles);


const dbz:string[]= ['Goku','Vegeta','Trunks'];

console.log('personaje 1',dbz[0])
console.log('personaje 2',dbz[1])
console.log('personaje 3',dbz[2]);


const [p1,p2,p3] = dbz
console.log('personaje 1',p1)
console.log('personaje 2',p2)
console.log('personaje 3',p3);



