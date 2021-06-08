  
var waifuPic = document.getElementById("waifuPic")  
var contentSection = document.getElementById('content')
  genBtn.addEventListener('click', getImage)
  genBtn.addEventListener('click', getQuote)
   function getImage (){
     fetch('https://api.waifu.pics/sfw/waifu')
  .then(function(response){
    return response.json ()
  })
  .then(function(data){
    console.log(data)
    var image = data.url
    waifuPic.append(image)
    waifuPic.setAttribute("src", data.url);
    waifuPic.setAttribute("height", "500");
    waifuPic.setAttribute("width", "300");
    waifuPic.setAttribute("alt", "Waifu");
   
  
  })
}
 
function getQuote () {
fetch('https://animechan.vercel.app/api/random')
    .then(function(response){
        return response.json ()
    })
    .then(function(quote) {
        var listQuote = quote.quote
        console.log(listQuote)
        var addH1 = document.createElement('h1');
        
        contentSection.appendChild(addH1)
        contentSection.append(listQuote)



    })
}

