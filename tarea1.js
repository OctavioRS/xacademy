//1)

function imprimirPiramide(numero) {

  for (let i = 1; i <= numero; i++) {
    let linea = '';

    for (let j = 1; j <= i; j++) {
      linea += j;
    }

    console.log(linea);
  }
}

imprimirPiramide(6);

function imprimirPiramide2(numero) {

  for (let i = 1; i <= numero; i++) {
    let linea = '';

    for (let j = 1; j <= i; j++) {
      linea += j;
    }

    console.log(linea);
  }
}

imprimirPiramide(3);

//2)

let array1 = [1, 2, 3];
let array2 = [4, 2, 6];

function devolverArrays(array1, array2) {
  let array3 = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      array3.push(array1[i]);
    }
  }

  return array3;
}

let coincide = devolverArrays(array1, array2);

console.log(coincide);

//3)
//3.1)

class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }

  agregarProducto(nombre, precio, unidades) {
    let productoExistente = this.productos.find(producto => producto.nombre === nombre);
    if (productoExistente) {
      console.log(`El producto ${nombre} ya existe con ${productoExistente.unidades} unidades.`);
    } else {
      let producto = new Producto(nombre, precio, unidades);
      this.productos.push(producto);
      console.log(`El producto ${nombre} ha sido agregado al carrito.`);
    }
  }

  montoTotalActualizado() {
    let total = this.montoTotal;
    this.productos.forEach((producto) => {
      total += producto.precio * producto.unidades;
    });
    return total;
  }
}

class Producto {
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
  }
}

let carrito = new Carrito(10, [new Producto("Cereal", 25, 2)]);

carrito.agregarProducto("Leche", 5, 1);
carrito.agregarProducto("Pan", 2, 3);
carrito.agregarProducto("Cereal", 25, 1);
carrito.agregarProducto("Leche", 5, 2);

console.log(carrito.montoTotalActualizado());

