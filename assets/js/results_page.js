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

// function getParams() {
//     // Get parameters from the URL
//     var userParams = document.location.search;
//     console.log(userParams);
//     var genre = userParams.split("=").pop();
//     console.log(genre);
//     searchAPI(genre)
// };

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
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    // Create div for body content on result cards
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
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
                console.log(randomValue)
                printResults(randomValue)
            }
            


        });

    }
};

//action get
settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://unogsng.p.rapidapi.com/search?newdate=2016-05-25&genrelist=801362&orderby=rating&limit=100&subtitle=english&audio=english&offset=0",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
        "x-rapidapi-host": "unogsng.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});


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
//         "netflixid": 783
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
//         {
//         "genre": "Western",
//         "netflixid": 7700
//         },
// ];
