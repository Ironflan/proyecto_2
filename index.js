

const peliculas = [
  {
    title: 'Lost',
    year: 2004,
    stars: 8,
    ratings: 111.728,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/lost-924104956-large.jpg'
  },
  {
    title: 'Interstellar',
    year: 2014,
    stars: 8,
    ratings: 102.717,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/interstellar-366875261-large.jpg'
  },
  {
    title: 'Seven (Se7en)',
    year: 1995,
    stars: 8.3,
    ratings: 175.601,
    genre: 'Thriller',
    image: 'https://pics.filmaffinity.com/seven_se7en-734875211-large.jpg'
  },
  {
    title: 'Shutter Island',
    year: 2010,
    stars: 7.3,
    ratings: 126.206,
    genre: 'Thriller',
    image: 'https://pics.filmaffinity.com/shutter_island-215721197-large.jpg'
  },
  {
    title: 'Hermanos de sangre',
    year: 2001,
    stars: 8.5,
    ratings: 60.656,
    genre: 'Bélico',
    image: 'https://pics.filmaffinity.com/band_of_brothers-541225951-large.jpg'
  },
  {
    title: 'The Pacific',
    year: 2010,
    stars: 7.5,
    ratings: 22.548,
    genre: 'Bélico',
    image: 'https://pics.filmaffinity.com/the_pacific-295119601-large.jpg'
  },
  {
    title: 'Star Wars III: La venganza de los sith',
    year: 2005,
    stars: 9,
    ratings: 103.419,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/star_wars_episode_iii_revenge_of_the_sith-699349136-large.jpg'
  },
  {
    title: 'El señor de los anillos: El retorno del rey',
    year: 2003,
    stars: 10,
    ratings: 185.961,
    genre: 'Ciencia ficción',
    image: 'https://pics.filmaffinity.com/the_lord_of_the_rings_the_return_of_the_king-178294596-large.jpg'
  },
  {
    title: 'Los Soprano',
    year: 1999,
    stars: 8.5,
    ratings: 58.764,
    genre: 'Drama',
    image: 'https://pics.filmaffinity.com/the_sopranos-196243243-mmed.jpg'
  },
  {
    title: 'The Wire',
    year: 2002,
    stars: 9,
    ratings: 49.118,
    genre: 'Drama',
    image: 'https://pics.filmaffinity.com/the_wire-680717276-mmed.jpg'
  },
];

const genres = [];

let genre = "";

const crearSeleccionarGenero = () => {
  const divFiltros = document.querySelector(".filter")

  const seleccionarGenero = document.createElement("select")

  for (const genre of genres) {
    const option = document.createElement("option");

    option.value = genre;
    option.textContent = genre;

    seleccionarGenero.appendChild(option);
    
  }
  divFiltros.appendChild(seleccionarGenero);
}

const printPeliculas = (pelis) => {
  const divPelis = document.querySelector(".peliculas");
  divPelis.innerHTML = "";

 for (const peli of pelis) {
  const divPeli = document.createElement("div");
    divPeli.classList.add("pelicula");

  const divImg = document.createElement("div");
  divImg.classList.add("imgContainer");

  const img = document.createElement("img");
  const title = document.createElement("h3");
  const year = document.createElement("p");
  const ratings = document.createElement("p");
  const divStars = document.createElement("div");
  divStars.classList.add("stars");

  for (let i = 1; i <= 10; i++) {
    const star = document.createElement("div");
    star.className = "estrella";
    if (i <= peli.stars) {
      star.classList.add("rellena"); 
    }
    // star.textContent = "★";
    divStars.appendChild(star);
  }

  img.src = peli.image; 
  title.textContent = peli.title;
  year.textContent = `Año: ${peli.year}`;
  ratings.textContent = `Rating: ${peli.stars}/10 (${peli.ratings} votos)`;

  divPeli.appendChild(divImg);
  divImg.appendChild(img);
  divPeli.appendChild(title);
  divPeli.appendChild(year);
  divPeli.appendChild(ratings);
  divPeli.appendChild(divStars);
  divPelis.appendChild(divPeli);

 } 

};

printPeliculas(peliculas);