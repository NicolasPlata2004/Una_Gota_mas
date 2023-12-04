document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // Verificación de las credenciales de inicio de sesión
    if ((email === "nicao511ng@gmail.com" && password === "Hola123") ||
        (email === "jbeltranbo@unal.edu.co" && password === "Colombia2023")) {
        // Redirigir a la página de la agenda si las credenciales son correctas
        window.location.href = "agenda.html";
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert("Email o contraseña incorrectos.");
    }
});
