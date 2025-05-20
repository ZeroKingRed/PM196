const productos = [
  { nombre: "Celular", precio: 8000 },
  { nombre: "TV", precio: 7000 },
  { nombre: "Auto", precio: 150000 },
  { nombre: "Chicle", precio: 5 }
];

//filtro
const filtrados = productos.filter(producto => producto.precio < 1000);
    //productos filtrados
const nombres = filtrados.map(producto => producto.nombre);
console.log(nombres);
