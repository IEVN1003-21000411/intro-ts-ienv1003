import { calcularISV2, type Producto } from "./05-desestructuracion-funciones";

const carrito: Producto[] = [
    {nombre:'Iphone14', precio:1500},
    {nombre:'Ipad Air', precio:1200},
    {nombre:'Macbook Pro', precio:3000},
];

const[total,isv] = calcularISV2(carrito);
console.log('Total',total);
console.log('ISV', isv)
