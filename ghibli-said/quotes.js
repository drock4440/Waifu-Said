function getQuote(){

    var requestUrl = 'https://animechan.vercel.app/api/random';

fetch(requestUrl)
        .then(function (response) {
         return response.json();
        })
        .then(function (data) {
            console.log(data)
          for (var i = 0; i < data.length; i++) {
            var listQuote = document.createElement('p');
            listQuote.textContent = data[i].quote;
            
        }
    })
}
        


// // console.log (quote)

// fetch('https://animechan.vercel.app/api/random')
//     .then(response => response.json())
//     .then(quote => console.log(quote))