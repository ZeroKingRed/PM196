const persona = {
  nombre: "Emilio Alejandro",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

// Aplica desestructuración
const { nombre, edad, direccion: { ciudad } } = persona;

// Imprime el mensaje
console.log(`Mi nombre es ${nombre}, mi edad es ${edad} años y vivo en la ciudad de ${ciudad}.`);
