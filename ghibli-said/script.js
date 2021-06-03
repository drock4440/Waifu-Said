fetch('https://ghibliapi.herokuapp.com/films/')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://api.waifu.pics/sfw/neko')
  .then(response => response.json())
  .then(quote => console.log(quote))