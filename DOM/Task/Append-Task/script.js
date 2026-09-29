var main = document.querySelector("main");
var btn = document.querySelector("button");
var arr = [
  "The future is here. It's just not widely distributed yet.",
  "There is nothing more dreadful than imagination without taste.",
  "Doing what you love is the cornerstone of having abundance in your life ",
];

    btn.addEventListener('click',function(){    
        var h1 = document.createElement('h1')
        var a = Math.floor(Math.random()*arr.length)
        h1.innerHTML  = arr[a]
        main.appendChild(h1)
    })