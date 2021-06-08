var searchBar = document.getElementById('searchBar')
const animeCharacters = []
var searchBtn = document.getElementById('search-button')
var input = document.getElementById('search-input')
var charName = input.value


function getByChar (charName) {
            let queryUrl = "https://animechan.vercel.app/api/quotes/character?name=" + charName 
            fetch(queryUrl)
            .then (function(response){
            console.log(response);
      })
    
    }

searchBtn.addEventListener('click', getByChar)