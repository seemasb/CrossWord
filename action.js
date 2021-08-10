let data = [
  {
     "clue": "ما هي سرعة الأبلود الخاصة في خدمة الفايلاين سوهو ؟",
     "answer": "سبعةميجا",
     "position": 3,
     "orientation": "down",
     "startx": 6,
     "starty": 1
  },
{
  "clue": "ماذا يجب ان ازود موظف المعرض لكي يتم دفع الفواتير ؟",
  "answer": "رقمالهوية",
  "position": 3,
  "orientation": "down",
  "startx": 16,
  "starty": 2
  },
{
  "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  "answer": "وكلاء",
  "position": 3,
  "orientation": "down",
  "startx": 2,
  "starty": 3
},
{
  "clue": "ماهي السرعات المتوفرة الخاصة بخدمة سوهو فاي لاين لايت؟",
  "answer": "عشرونميجا",
  "position": 3,
  "orientation": "down",
  "startx": 9,
  "starty": 3
},
{
  "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  "answer": "حساباتبنكية",
  "position": 4,
  "orientation": "down",
  "startx": 13,
  "starty": 3
},
{
  "clue": "مدينة لا تتوفر فيها خدمة سوهو فاي لاين؟",
  "answer": "غزة",
  "position": 5,
  "orientation": "across",
  "startx": 4,
  "starty": 4
},
{
  "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  "answer": "معارضالاتصالات",
  "position": 6,
  "orientation": "across",
  "startx": 6,
  "starty": 5
},
{
  "clue": "تزويدماذا يجب ان ازود موظف المعرض لكي يتم دفع الفواتير ؟",
  "answer": "الاسم",
  "position": 7,
  "orientation": "down",
  "startx": 11,
  "starty": 5
},
{
  "clue": "ماهي قنوات التسديد المعتمدة لمشتركي خدمة فايلاين سوهو؟",
  "answer": "بالباي",
  "position": 8,
  "orientation": "across",
  "startx": 1,
  "starty": 6
},
{
  "clue": "كم المدة التي تمنح للمشترك مجاناً؟",
  "answer": "شهران",
  "position": 9,
  "orientation": "across",
  "startx": 3,
  "starty": 8
},
{
  "clue": " المعدل الزمني لتركيب خدمة فايلان سوهو؟",
  "answer": "عشرايام",
  "position": 10,
  "orientation": "across",
  "startx": 4,
  "starty":11
},
{
  "clue": "يتم دفع الفاتورة كل شهر ؟ام كل شهرين ؟",
  "answer": "شهر",
  "position": 11,
  "orientation": "down",
  "startx": 5,
  "starty": 11
},
{
  "clue": "ماذا يجب ان ازود موظف المعرض لكي يتم دفع الفواتير ؟",
  "answer": "لاينكود",
  "position": 12,
  "orientation": "across",
  "startx": 11,
  "starty": 12
}
] 

window.onload = () => {
  
      $(".puzzle-container").crossword(data, () => alert("bravooo!"));
    

  // Sets the theme
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("html").addClass("dark");
  }
};


//00a0d7