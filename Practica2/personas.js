const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 },
  { nombre: "Luis", edad: 17 },

];

//Buscar Luises
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis);

//Imprimir nombre y edad de cada persona
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});

//Sumar edades de Luis
const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(`La suma total de las edades es: ${totalEdades}`);
