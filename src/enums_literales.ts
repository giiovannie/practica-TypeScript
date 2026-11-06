export {}

enum Estado {
    ACTIVO = "activo",
    INACTIVO = "inactivo",
    PENDIENTE = "pendiente"
}

const estadoActual: Estado = Estado.ACTIVO;

console.log(estadoActual);


//literales

type RolUsuario = "admin" | "editor" | "lector";

const rolActual: RolUsuario = "admin"; // Si ponemos otro texto, TS dara error

console.log(rolActual);