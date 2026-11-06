export{}

interface Usuario {
  nombre: string;
  edad: number;
  email?: string; //propiedad opcional 
}

const empleado: Usuario = {
  nombre: "ivan",
  edad: 28,
};

// console.log(empleado.nombre);


