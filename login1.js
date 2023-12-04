document.getElementById("login1-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificar las credenciales (correo y contraseña)
    if (email === "oscarjhondairo@gmail.com" && password === "oscar123") {
        // Redirigir a la lista de pacientes
        window.location.href = "lista_pacientes.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});

