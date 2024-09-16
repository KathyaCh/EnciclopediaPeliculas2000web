document.addEventListener ('DOMContentLoaded', () => {
    const peliculas = [
        { titulo: 'El Señor de los Anillos', año: 2001, género: 'Fantasia Medieval' },
        { titulo: 'El Caballero Oscuro', año: 2008, género: 'Acción, Crimen, Drama' },
        { titulo: 'Gladiador', año: 2000, género: 'Accion, Medieval, Drama' },
        { titulo: 'Avatar', año: 2009, género: 'Ciencia ficción, Accion' },
        { titulo: 'Ciudad de dios', año: 2002, género: 'Acción, Drama' },
        { titulo: 'Piratas del caribe', año: 2003, género: 'Fantasia, Familiar, Drama' },
        { titulo: 'El diario de Bridget Jones', año: 2001, género: 'Romantico, Comedia' }

    ];

    const listaPeliculas =document.getElementById ('lista-de-peliculas');

    peliculas.forEach(pelicula => {
        const divPelicula = document.createElement('div');
        divPelicula.classList.add('pelicula');
        divPelicula.innerHTML = `
            <h3>${pelicula.titulo}</h3>
            <p>Año: ${pelicula.año}</p>
            <p>Género: ${pelicula.género}</p>
        `;
        listaPeliculas.appendChild(divPelicula);
    });
});