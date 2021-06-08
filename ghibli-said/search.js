var input = document.getElementById('form1')


fetch('https://animechan.vercel.app/api/quotes/character?name=saitama')
      .then(response => response.json())
      .then(quotes => console.log(quotes))
    
      console.log(input.value)