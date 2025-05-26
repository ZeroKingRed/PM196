function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }

    });
}
verificarUsuario("admin")
    .then(res => console.log(res))  //con accs
    .catch(err => console.error(err));

verificarUsuario("MikeWasowski")
    .then(res => console.log(res))
    .catch(err => console.error(err)); //sin

    verificarUsuario("Admin")
    .then(res => console.log(res))
    .catch(err => console.error(err)); //sin

    verificarUsuario("Bebecin")
    .then(res => console.log(res))
    .catch(err => console.error(err)); //sin