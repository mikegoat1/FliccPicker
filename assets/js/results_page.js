// Variables
var resultContentEl = document.querySelector("#result-content");

var genre = document.location.search;
console.log(genre);


// var urlGenres = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';

function getParams() {
        // Get parameters from the URL
        var userParams = document.location.search;
        console.log(userParams);
        var genre = userParams[1].split("=").pop();

        searchAPI(genre)
};

function printResults(resultObject) {
        console.log(resultObject);

        //Create div for result cards
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
        infoButtonEl.textContent = 'More Info';
        infoButtonEl.setAttribute('href', resultObj.url);
        infoButtonEl.classList.add('btn', 'btn-dark');

        resultBody.append(movieTitle, bodyContentEl, watchButtonEl, playlistButtonEl, infoButtonEl);

        resultContentEl.append(resultCard);
};

function searchApi(genre) {

        var localQueryUrl = "https://netflix-unofficial.p.rapidapi.com/api/search";

        if (genre) {
                localQueryUrl = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=" + genre;
        }

        fetch(localQueryUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "917c1e408cmshe632e5d6739846dp1cf501jsn9642ae4176f8",
		"x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"  
	}
        })
        .then(response => {
	        console.log(response);
        })
        .catch(err => {
	console.error(err);
        });
};        



searchApi(genre);


// var results = [
//         {
//         "genre": "Action",
//         "netflixid": 801362
//         },
//         {
//         "genre": "Anime",
//         "netflixid": 7424
//         },
//         {
//         "genre": "Children & Family",
//         "netflixid": 7424
//         },
//         {
//         "genre": "Classic Films",
//         "netflixid": 31574
//         },
//         {
//         "genre": "Laugh-Out-Loud Comedies",
//         "netflixid": 1333288
//         },
//         {
//         "genre": "Documentaries",
//         "netflixid": 6839
//         },
//         {
//         "genre": "Drama",
//         "netflixid": 5763
//         },
//         {
//         "genre": "Horror Films",
//         "netflixid": 8711
//         },
//         {
//         "genre": "Independent Films",
//         "netflixid": 7077
//         },
//         {
//         "genre": "Musicals",
//         "netflixid": 13335
//         },
//         {
//         "genre": "Steamy Romantic Films",
//         "netflixid": 35800
//         },
//         {
//         "genre": "Sci-Fi Adventure",
//         "netflixid": 6926
//         },
//         {
//         "genre": "Sports Films",
//         "netflixid": 4370
//         },
//         {
//         "genre": "Psychological Thrillers",
//         "netflixid": 5505
//         },
// ];
