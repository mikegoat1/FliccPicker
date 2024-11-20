// Variables
var storedMovieTitle;
var getList = [];


var resultContentEl = document.querySelector("#result-content");
var playlistContentEl = document.querySelector("#playlist-content");
//search bar url
var userParams = document.location.search;
console.log(userParams);
var genre = userParams.split("?").pop();
console.log(genre)
//
resultContentEl.addEventListener("click", function (event) {
    console.log(event.target.value);
    event.stopPropagation();
    storedMovieTitle = event.target.value;

    // add to local storage
    console.log("Here I am!")
    if (event.target.matches("#playlist")) {

        let stored = localStorage.getItem("movieTitle");
        if (stored) {
            let optimizedStored = JSON.parse(stored);
            getList = optimizedStored;

            getList.push(storedMovieTitle);
            console.log(getList)
            localStorage.setItem("movieTitle", JSON.stringify(getList));
            var playlistTitles = document.createElement("li");
            playlistTitles.innerHTML = storedMovieTitle;
            $("#ul").append(playlistTitles);
        } else {
            getList.push(storedMovieTitle);
            console.log(getList)
            localStorage.setItem("movieTitle", JSON.stringify(getList));
            var playlistTitles = document.createElement("li");
            playlistTitles.innerHTML = storedMovieTitle;
            $("#ul").append(playlistTitles);

        }

    }
});

function printPlaylist() {

    let stored = localStorage.getItem("movieTitle");
    if (stored) {


        let optimizedStored = JSON.parse(stored);
        console.log(JSON.parse(stored))


        // Create ul for Playlist

        for (i = 0; i < optimizedStored.length; i++) {
            var playlistTitles = document.createElement("li");
            console.log(optimizedStored[i])
            playlistTitles.innerHTML = optimizedStored[i];
            $("#ul").append(playlistTitles);

        }
    }
};

function printResults(resultObject) {
    // console.log(resultObject);

    //Create div for result cards
    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'text-white', 'mb-3', 'p-3');
    resultCard.setAttribute("style", "border-color: #185ADB; background-color: #FFC947;")

    // Create div for body content on result cards
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultBody.setAttribute("style", "background-size: cover; background-image: url(" + resultObject.img + ")")
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
            '<strong>Ratings:</strong> ' + resultObject.imdbrating + '<br/>';
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
    watchButtonEl.setAttribute('href', "https://www.netflix.com/title/" + resultObject.nfid);
    watchButtonEl.setAttribute("id", "watch");
    watchButtonEl.classList.add('btn', 'btn-dark');

    var playlistButtonEl = document.createElement('button');
    playlistButtonEl.textContent = 'Add to Playlist';
    playlistButtonEl.setAttribute("id", "playlist");
    playlistButtonEl.setAttribute("value", resultObject.title)
    playlistButtonEl.classList.add('btn', 'btn-dark', 'm-2');

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



            for (let i = 0; i < 9; i++) {
                let randomValue = response.results[Math.floor(Math.random() * response.results.length)];
                printResults(randomValue)

            }



        });

    }
};


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://geek-jokes1.p.rapidapi.com/',
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e63631f8d1msh168f938e27f4288p179d82jsn16e3f45361fa',
		'x-rapidapi-host': 'geek-jokes1.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
    $(".jokes").text(response.joke)
});


searchApi(genre);

printPlaylist();
