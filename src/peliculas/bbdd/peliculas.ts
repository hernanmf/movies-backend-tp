import { Pelicula } from '../interfaces/pelicula.interface'
import { v4 as uuid } from 'uuid';

export let peliculas: Pelicula[] = [
  {
    "id": uuid(),
    "titulo": "The Dark Knight",
    "imagen": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "año": "2008",
    "sinopsis": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "duración": "152",
    "director": "Christopher Nolan",
    "idioma": "Inglés",
    "actores": "Christian Bale, Heath Ledger, Aaron Eckhart",
    "generos": "Acción, Crimen, Drama",
    "palabrasClave": "dc comics, crime fighter, secret identity, scarecrow, sadism"
  },
  {
    "id": uuid(),
    "titulo": "The Godfather",
    "imagen": "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    "año": "1972",
    "sinopsis": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "duración": "175",
    "director": "Francis Ford Coppola",
    "idioma": "Inglés",
    "actores": "Marlon Brando, Al Pacino, James Caan",
    "generos": "Drama, Crimen",
    "palabrasClave": "italy, love at first sight, loss of father, italian american cop, 1940s"
  },
  {
    "id": uuid(),
    "titulo": "The Shawshank Redemption",
    "imagen": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "año": "1994",
    "sinopsis": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "duración": "142",
    "director": "Frank Darabont",
    "idioma": "Inglés",
    "actores": "Tim Robbins, Morgan Freeman, Bob Gunton",
    "generos": "Drama, Crimen",
    "palabrasClave": "prison, corruption, police brutality, prison cell search, escape from prison"
  },
  {
    "id": uuid(),
    "titulo": "Kill Bill: Volumen 1",
    "imagen": "https://image.tmdb.org/t/p/w500/tBzd5rFBcoIVBolLZM5MNjzS0pM.jpg",
    "año": "2003",
    "sinopsis": "La Novia (Uma Thurman) es una asesina que en el pasado trabajaba para el Escuadrón Asesino Víbora Letal, liderado por Bill. Tras años de trabajar para Bill, la Novia decide abandonar la organización y casarse con otro hombre. Pero, en la celebración de la boda, Bill y los miembros de su banda la atacan a ella y a los invitados, y la Novia cae en un profundo coma. Después de cinco años, despierta sin un bebé en su vientre, sin su marido y con un gran deseo de venganza.",
    "duración": "111",
    "director": "Quentin Tarantino",
    "idioma": "Inglés",
    "actores": "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah",
    "generos": "Acción, Crimen",
    "palabrasClave": "assassin, martial arts, kung fu, revenge"
  },
  {
    "id": uuid(),
    "titulo": "Kill Bill: Volumen 2",
    "imagen": "https://image.tmdb.org/t/p/w500/pI9A6om9fyIlRZwlc3z9x3AbDkr.jpg",
    "año": "2004",
    "sinopsis": "Después de eliminar a algunos miembros de la banda que intentaron asesinarla el día de su boda, \"la Novia\" (Uma Thurman) sigue su venganza contra los responsables de la masacre. Con ayuda de sus antiguos jefes y algún que otro viejo amigo, la Novia irá eliminando uno a uno a sus enemigos hasta encontrar al principal responsable, Bill (David Carradine).",
    "duración": "137",
    "director": "Quentin Tarantino",
    "idioma": "Inglés",
    "actores": "Uma Thurman, David Carradine, Daryl Hannah, Michael Madsen",
    "generos": "Acción, Crimen, Suspense",
    "palabrasClave": "swordplay, katana, martial arts, mexico, wedding chapel"
  }
];
