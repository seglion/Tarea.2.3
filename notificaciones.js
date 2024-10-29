const notificaciones = document.querySelector('.notificaciones');
const boton = document.querySelector('.boton');
const lista = document.querySelector('.lista');

function mostrarNotificacions(data) {
    notificaciones.classList.add('mostrada');
    boton.classList.add('mostrada');
    lista.innerHTML = '';
    data.forEach(notificacions => {
        const li = document.createElement('li');
        li.innerHTML = `${notificacion.titulo}`;
        lista.appendChild(li);
    });
}

boton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(mostrarNotificacions);
});
