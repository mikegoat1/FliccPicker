let url = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';
 
//  fetch(url, { method: 'Get' })
//      .then((res) => res.json())
//      .then((json) => {
//          console.log(json);
//      });

     fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })

        // Genre URL 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0'

        // "Action", "Action & Adventure", "Adult",  "Adventure", "Animation", "Anime",  "Biography",  "Comedy" "Crime" "Documentary", "Drama", "Family",  "Fantasy","Food", "Game Show", "History","Horror","Kids", "Music", "Musical", "Mystery", "Nature", "News", "Reality", 
        // "Romance", "Sci-Fi & Fantasy", "Science Fiction", "Soap", "Sports","Supernatural", "Talk", "Thriller","Travel", "TV Movie", "War", "War & Politics", "Western",

        
