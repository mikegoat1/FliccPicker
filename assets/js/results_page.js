var resultContentEl = document.querySelector("#result-content")

// var urlGenres = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';

// var urlSearchName = "https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/search/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&search_field=name&search_value=Ed%20Wood";

// var urlSearchAction = "https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/search/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&search_field=tmdb_movie_id&search_value=1";

// var urlTitles = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/list-titles/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&typse=movie'

// var urlSourceNetflixTitles = "https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/list-titles/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&source_ids=1,000&type=movie"

// var streamArray = ["Netflix", "Hulu", "Amazon", "HBO", "Disney+", "AppleTV"]
// var genreArray = ["Action & Adventure", "Animation", "Anime", "Comedy", "Crime", "Documentary", "Drama", "Family", "Horror", "Kids", "Musical", "Mystery", "Romance", "Sci-Fi & Fantasy", "Sports", "Supernatural", "Thriller", "War", "Western"]

function getParams() {
        // Get parameters from the URL
        var userParams = document.location.search.split("&");

        var genre = userParams[1].split("=").pop();

        searchAPI(genre)
};

function printResults(resultObject) {
        console.log(resultObject);

        // Create div for result cards
        var resultCard = document.createElement('div');
        resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

        // Create div for body content on result cards
        var resultBody = document.createElement('div');
        resultBody.classList.add('card-body');
        resultCard.append(resultBody);

        // Create h3 element for result title
        var movieTitle = document.createElement('h3');
        movieTitle.textContent = resultObj.title;

        var bodyContentEl = document.createElement('p');
        bodyContentEl.innerHTML =
        '<strong>Date:</strong> ' + resultObj.date + '<br/>';

        if (resultObj.subject) {
                bodyContentEl.innerHTML +=
                '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
                } else {
                bodyContentEl.innerHTML +=
                '<strong>Subjects:</strong> No subject for this entry.';
        }
        if (resultObj.description) {
                bodyContentEl.innerHTML +=
                '<strong>Description:</strong> ' + resultObj.description[0];
        } else {
                bodyContentEl.innerHTML +=
                '<strong>Description:</strong>  No description for this entry.';
        };

        var watchButtonEl = document.createElement('a');
        watchButtonEl.textContent = 'Watch Now';
        watchButtonEl.setAttribute('href', resultObj.url);
        watchButtonEl.classList.add('btn', 'btn-dark');

        var playlistButtonEl = document.createElement('a');
        playlistButtonEl.textContent = 'Add to Playlist';
        playlistButtonEl.setAttribute('href', resultObj.url);
        playlistButtonEl.classList.add('btn', 'btn-dark');

        var infoButtonEl = document.createElement('a');
        infoButtonEl.textContent = 'More Info;
        infoButtonEl.setAttribute('href', resultObj.url);
        infoButtonEl.classList.add('btn', 'btn-dark');

        resultBody.append(movieTitle, bodyContentEl, watchButtonEl, playlistButtonEl, infoButtonEl);

        resultContentEl.append(resultCard);
};




// import {streamArray, genreArray,selected } from "./starterPage"; 


// streamArray; 
// genreArray;
// selected
// Genre URL 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0'

        // "Action & Adventure", "Animation", "Anime", "Comedy" "Crime" "Documentary", "Drama", "Family","Horror","Kids", "Musical", "Mystery", "Romance", "Sci-Fi & Fantasy","Sports","Supernatural","Thriller", "War", "Western",



