
var resultContentEl = document.querySelector("#result-content")


// var urlGenres = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';

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

var urlAA = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Action%20%26%20Adventure";

var urlComedies = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Comedies";

var urlDrama = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Drama";

var urlHorrorMovies = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Horror%20Movies";

var urlDocu = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Documentaries";

var urlRomance =  "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Romantic%20Movies"; 

var urlSciFi = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Sci-Fi%20%26%20Fantasy";

var urlSports =  "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Sports%20Movies";

var urlThriller = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Thrillers"; 


//Action and Adventure
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlAA,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Comedies
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlComedies,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Drama
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlDrama,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Horror Movies
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlHorrorMovies,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Documentary
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlDocu,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Documentary
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlDocu,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Romance
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlRomance,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//SciFi
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlSciFi,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Sports
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlSports,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Thriller
settings = {
    "async": true,
    "crossDomain": true,
    "url": urlThriller,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});