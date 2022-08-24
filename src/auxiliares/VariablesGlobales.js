// Tanto el nombre de este archivo, como el nombre de todas las variables aqui, deberia empezar en minuscula.
// Siempre usamos camelCase(primera letra minuscula) a menos que estemos lidiando con componentes de React

export const apiKey = "api_key=9b8ef974b251064418c46a5cc4a9bc01";
export const UrlBase = "https://api.themoviedb.org/3/movie/";
export const Lenguaje = "&language=es-ES";
export const UrlBusqueda = `https://api.themoviedb.org/3/search/movie?${apiKey}${Lenguaje}&query=`;
export const UrlImagen = "https://image.tmdb.org/t/p/original/";
