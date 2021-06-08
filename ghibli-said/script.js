  
var waifuPic = document.getElementById("waifuPic")  
  genBtn.addEventListener('click', getImage)
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
 
