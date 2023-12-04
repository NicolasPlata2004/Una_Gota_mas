document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("register-name").value;
    var lastname = document.getElementById("register-lastname").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    // Validación de campos vacíos
    if (!name || !lastname || !email || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validación de nombre y apellido para que no contengan números
    var regex = /[0-9]/;
    if (regex.test(name) || regex.test(lastname)) {
        alert("El nombre y los apellidos no deben contener números.");
        return;
    }

    // Validación de longitud de la contraseña
    if (password.length < 5) {
        alert("La contraseña debe tener más de 4 caracteres.");
        return;
    }

    // Aquí puedes implementar la lógica para registrar al usuario
    alert("Usuario registrado con éxito.");
    window.location.href = "login.html"; // Redirige de nuevo al login
});
