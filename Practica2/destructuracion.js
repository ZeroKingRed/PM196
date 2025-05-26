const persona = {
  nombre: "Emilio Alejandro",
  edad: 22,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

//desestructuración
const { nombre, edad, direccion: { ciudad } } = persona;

console.log(`Mi nombre es ${nombre}, mi edad es ${edad} años y vivo en la ciudad de ${ciudad}.`);