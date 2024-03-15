document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lógica para verificar credenciales (simulación)
    if (email === 'usuario@example.com' && password === 'contraseña') {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        // Redirigir a la página principal
        window.location.href = 'dashboard.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
});
