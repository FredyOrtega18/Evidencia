function Loguear() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('clave').value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && username === user[0] && password === user[3]) {
        alert('Usuario registrado');
        localStorage.setItem('Usuario Activo', username);
        window.location.href = '../vistas/Pokemones.html';
    } else {
        alert('Usuario o contraseña incorrectos');
        window.location.href = '../vistas/registrar.html';
    }
}
