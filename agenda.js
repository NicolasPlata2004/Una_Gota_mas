document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.day').forEach(day => {
        day.addEventListener('click', function() {
            const month = this.getAttribute('data-month');
            const day = this.innerText;
            document.getElementById('fecha').value = `${day} de ${month}`;
        });
    });
});
