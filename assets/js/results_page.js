// Variables
var storedMovieTitle = "";

var resultContentEl = document.querySelector("#result-content");
var playlistContentEl = document.querySelector("#playlist-content");

var userParams = document.location.search;
console.log(userParams);
var genre = userParams.split("?").pop();
console.log(genre)

var playlistButtonEl = document.getElementById("playlist");

resultContentEl.addEventListener("click", function(event) {
    console.log(event.target);
    // add to local storage
    console.log("Here I am!")
    if (event.target.matches("#playlist")){
        localStorage.setItem("movieTitle", storedMovieTitle);
    }
});

function printPlaylist(playlistObject) {
    console.log(playlistObject)

    var playlistDiv = document.createElement("div");
    playlistDiv.classList.add('playlist-div')

    // Create ul for Playlist
    var playlistBody = document.createElement("ul");
    playlistBody.classList.add("playlist-body");
    playlistCard.append(playlistBody);

    // Create div for h3 playlist titles
    var playlistTitle = document.createElement("li");
    // Get playlist title from local storage
    // playlistTitle.textContent = playlistObject.results[0].title;

    playlistContentEl.append()
    resultContentEl.append(resultCard);
};

function printResults(resultObject) {
    // console.log(resultObject);

    //Create div for result cards
    var resultCard = document.createElement('div');
    resultCard.classList.add('card',  'text-white', 'mb-3', 'p-3');
    resultCard.setAttribute("style", "border-color: #185ADB; background-color: #FFC947;")

    // Create div for body content on result cards
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultBody.setAttribute("style","background-size: cover; background-image: url("+resultObject.img+")")
    resultCard.append(resultBody);

    // Create h3 element for result title
    var movieTitle = document.createElement('h3');
    movieTitle.textContent = resultObject.title;

    storedMovieTitle = resultObject.title;

    var bodyContentEl = document.createElement('p');
    bodyContentEl.innerHTML =
        '<strong>Date:</strong> ' + resultObject.year + '<br/>';

    if (resultObject.imdbrating) {
        bodyContentEl.innerHTML +=
            '<strong>Ratings:</strong> ' + resultObject.imdbrating+ '<br/>';
    } else {
        bodyContentEl.innerHTML +=
            '<strong>Ratings:</strong> No subject for this entry.';
    }
    if (resultObject.synopsis) {
        bodyContentEl.innerHTML +=
            '<strong>Description:</strong> ' + resultObject.synopsis;
    } else {
        bodyContentEl.innerHTML +=
            '<strong>Description:</strong>  No description for this entry.';
    };

    var watchButtonEl = document.createElement('a');
    watchButtonEl.textContent = 'Watch Now';
    watchButtonEl.setAttribute('href', resultObject.url);
    watchButtonEl.setAttribute("id", "watch");
    watchButtonEl.classList.add('btn', 'btn-dark');

    var playlistButtonEl = document.createElement('button');
    playlistButtonEl.textContent = 'Add to Playlist';
    playlistButtonEl.setAttribute("id", "playlist");
    playlistButtonEl.classList.add('btn', 'btn-dark','m-2');

    resultBody.append(movieTitle, bodyContentEl, watchButtonEl, playlistButtonEl);
    

    resultContentEl.append(resultCard);
};

function searchApi(genre) {

    var localQueryUrl = "https://unogsng.p.rapidapi.com/search?newdate=2002-06-01&orderby=rating&limit=100&subtitle=english&audio=english&offset=0";

    if (genre) {
        localQueryUrl = "https://unogsng.p.rapidapi.com/search?newdate=2002-06-01&" + genre + "orderby=rating&limit=100&subtitle=english&audio=english&offset=0";

        settings = {
            "async": true,
            "crossDomain": true,
            "url": localQueryUrl,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
                "x-rapidapi-host": "unogsng.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            
            

            for(let i=0; i<9; i++){
                let randomValue = response.results[Math.floor(Math.random()*response.results.length)];
                printResults(randomValue)
            }
            


        });

    }
};

 settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://geek-jokes.p.rapidapi.com/api?format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
		"x-rapidapi-host": "geek-jokes.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (jokes) {
	console.log(jokes);
$(".jokes").text(jokes.joke)

});

searchApi(genre);


