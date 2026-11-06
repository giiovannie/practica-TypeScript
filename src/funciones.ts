const user = ( email: string, password: string, dni?: number, estado: boolean = true): void => {
    return console.log(`email: ${email}, password: ${password}, dni: ${dni}, estado: ${estado}`);
}


user("john@example.com", "password123")
// aca se puede notar que el dni es opcional, ya que no se le pasa ningun valor y no da error

// tambien se logra ver como maneja una funcion que no retorna ningun valor, ya que se le indica que el tipo de retorno es void

// a su ve podemos ve los tipados de los parametros que recibe la funcion, en este caso email y password son de tipo string y dni es de tipo number y opcional

// se logra ver como se le puede asignar un valor por defecto a un parametro, en este caso estado es de tipo boolean y su valor por defecto es true