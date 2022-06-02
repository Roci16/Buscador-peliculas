Roci,

Felicitaciones por la entrega de tu TP! Estoy muy feliz recorriendolo. Me encanta el look de la web, respeta las pautas y a la vez se siente muy original. La combinación de colores, las tipografías, está todo muy lindo.

A nivel comportamiento, la veo en general muy bien. Seguís las consignas y todo lo que espero ver, está. Hay algunas cosas que faltan o se pueden mejorar:

- Me encanta la idea de que en la pagina principal, en el componente Tarjeta, se vea la imagen de cada peli al lado del titulo, pero se ve feo cuando la API no nos devuelve una imagen para esa peli. Probá poner una imagen placerholder:

```js
image={pelicula.poster_path ? `${UrlImagen}${pelicula.poster_path}` : linkAImagenLocal}
```

- El input y botón del buscador están muy básicos, con los estilos por defecto, sin padding. Probá darle un poco más de amor al estilado ahí.

- Los botones de la navbar tienen el link en el texto, no rodeando al elemento en sí. Eso provoca un bug muy molesto: si hago click en el botón, pero afuera del texto, el link no funciona. El link deberia rodear todo el elemento, asi:

```js
<Link to="/estrenos">
  <li className="botones-nav">Estrenos</li>
</Link>
```

- Cuando la película no tiene géneros, el detalle se rompe. Proba este link por ejemplo: http://localhost:3000/movie/774074
  Eso pasa porque no estas en tu codigo preparandote para la posibilidad de que una peli no tenga info dentro de los generos:

```js
<p>Géneros : {pelicula.genres && pelicula.genres[0].name}</p>
```

Ese es tu codigo. Pero en el caso del link que te pase, la pelicula si tiene pelicula.genres, lo que pasa es que es un array vacio, entonces se rompe al querer buscar [0].name. La solucion seria:

```js
<p>Géneros : {pelicula.genres && pelicula.genres[0]?.name}</p>
```

A nivel codigo, esta super prolijo, especialmente los estilos. Usas algunas variables sin camelCase, pero fuera de eso, impecable.

Te dejo algunos comentarios puntuales en los archivos para que veas cositas a resolver, pero en general tu trabajo está muy, muy bien, y refleja tu enorme crecimiento como dev en los ultimos meses.

Felicitaciones, Ro: ya sos oficialmente front end developer.
