let data = [
  {
     "clue": "Prima lettera dell'alfabeto greco",
     "answer": "alpha",
     "position": 1,
     "orientation": "across",
     "startx": 1,
     "starty": 1
  },
{
  "clue": "__ boreale",
  "answer": "aurora",
  "position": 1,
  "orientation": "down",
  "startx": 1,
  "starty": 1
  },
{
  "clue": "Segna l'orario",
  "answer": "orologio",
  "position": 2,
  "orientation": "across",
  "startx": 1,
  "starty": 4
},
{
  "clue": "Infinito di \"Amo\"",
  "answer": "amare",
  "position": 3,
  "orientation": "across",
  "startx": 1,
  "starty": 6
},
{
  "clue": "Sono tuoi __",
  "answer": "amici",
  "position": 4,
  "orientation": "across",
  "startx": 3,
  "starty": 2
},
{
  "clue": "Una serie di lettere",
  "answer": "parola",
  "position": 5,
  "orientation": "down",
  "startx": 3,
  "starty": 1
},
{
  "clue": "Topo __ Dittatore",
  "answer": "gigio",
  "position": 6,
  "orientation": "down",
  "startx": 7,
  "starty": 1
},
{
  "clue": "Sono nei parchi",
  "answer": "aiuole",
  "position": 7,
  "orientation": "down",
  "startx": 5,
  "starty": 1
}
] 

window.onload = () => {
  
      $(".puzzle-container").crossword(data, () => alert("End!"));
    

  // Sets the theme
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("html").addClass("dark");
  }
};
