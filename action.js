let data = [
  {
     "clue": "اسمي",
     "answer": "سيما",
     "position": 1,
     "orientation": "down",
     "startx": 5,
     "starty": 1
  },
{
  "clue": "funny pictures",
  "answer": "meme",
  "position": 0,
  "orientation": "across",
  "startx": 2,
  "starty": 2
  },
{
  "clue": "mother",
  "answer": "haneen",
  "position": 3,
  "orientation": "across",
  "startx": 4,
  "starty": 5
},
{
  "clue": "sister",
  "answer": "hiba",
  "position": 3,
  "orientation": "down",
  "startx": 4,
  "starty": 5
},
{
  "clue": "brother",
  "answer": "tayseer",
  "position": 4,
  "orientation": "across",
  "startx": 3,
  "starty": 8
}
] 


window.onload = () => {
  
      $(".puzzle-container").crossword(data, () => alert("End!"));
    

  // Sets the theme
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("html").addClass("dark");
  }
};
