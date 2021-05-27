let url = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/regions/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';
 
 fetch(url, { method: 'Get' })
     .then((res) => res.json())
     .then((json) => {
         console.log(json);
     });