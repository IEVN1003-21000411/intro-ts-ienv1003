export interface Producto{
    nombre:string,
    precio:number
}

const telefono:Producto = {
    nombre:'Iphone14',
    precio: 800
}

const tablet:Producto ={
    nombre:'Ipad Aria',
    precio: 1600,
}

function calcularISV(prductos:Producto[]):number{
    let total = 0;
    for(let producto of prductos){
        total+= producto.precio
    }

    return total * 0.15;
};


const articulos = [telefono,tablet];
const isv = calcularISV(articulos);
console.log('ISR',isv);



export function calcularISV2(prductos:Producto[]):[number,number]{
    let total=0;

    for(let producto of prductos){
        total += producto.precio;
    }
    return [total,total*0.15]
};
const [total, isv2]= calcularISV2(articulos);
console.log('Total:',total);
console.log('ISR 2', isv2)
