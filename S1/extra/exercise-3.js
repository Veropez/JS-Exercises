const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}
];

let smallFilm = [];
let mediumFilm = [];
let longFilm = [];

for (movie of movies) {
    if(movie.durationInMinutes < 100) {
        smallFilm.push(movie);
    } else if (movie.durationInMinutes < 200) {
        mediumFilm.push(movie);
    } else {
        longFilm.push(movie);
    }
}

console.log(smallFilm, mediumFilm, longFilm);