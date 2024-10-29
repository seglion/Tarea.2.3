const notificaciones = document.querySelector('.notificaciones');
const boton = document.querySelector('.boton');
const lista = document.querySelector('.lista');

function mostrarNotificaciones(data) {
    notificaciones.classList.add('mostrada');
    boton.classList.add('mostrada');
    lista.innerHTML = '';
    data.forEach(notificacion => {
        const li = document.createElement('li');
        li.innerHTML = `${notificacion.titulo}`;
        lista.appendChild(li);
    });
}

boton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(mostrarNotificaciones);
});