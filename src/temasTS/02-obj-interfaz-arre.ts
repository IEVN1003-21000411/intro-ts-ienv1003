
interface Alumno{
    nombre: string;
    edad: number;
    activo: boolean;
    email?: string;
    nota: number | string;
}

const alumno:Alumno = {
    nombre:"Juan",
    edad:23,
    activo:true,
    //email:"juan@gmail.com",
    nota:9.5
}

console.log(alumno);


let mascota:string[] = ['Perro','Gato','Loro'];
mascota.push('Tortuga')
console.log(mascota);
mascota[1] = 'Pez';
console.log(mascota);



let idades:(number|string)[] = [23,45,67,'89'];
idades.push(90);
idades.push('100');
console.log(idades);



