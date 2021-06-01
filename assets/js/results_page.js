// Variables
var resultContentEl = document.querySelector("#result-content");



// Get parameters out of the URL
function getParams() {
        // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
        // var searchParamsArr = document.location.search.split('&');
      
        // Get the query and format values
        var genre = searchParamsArr[0].split('=').pop();
      
        SearchApi(genre);
};

// Fetch genres from API
fetch("https://netflix-unofficial.p.rapidapi.com/api/genres", {
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

// Fetch search from API
// fetch("https://netflix-unofficial.p.rapidapi.com/api/search?genre=Action", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "917c1e408cmshe632e5d6739846dp1cf501jsn9642ae4176f8",
// 		"x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// Function to search API
function searchApi(genre) {
        var locQueryUrl = "https://netflix-unofficial.p.rapidapi.com/api/search";
      
        if (genre) {
                locQueryUrl = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=" + genre;
        };
        
        fetch(localQueryUrl), {
                "method": "GET",
                "headers": {
                        "x-rapidapi-key": "917c1e408cmshe632e5d6739846dp1cf501jsn9642ae4176f8",
                        "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
                }
        }
        .then(response => {
                console.log(response);
        })
        .catch(err => {
                console.error(err);
        });
};

getParams();
        

// };

// var urlGenres = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';

// function getParams() {
//         // Get parameters from the URL
//         var userParams = document.location.search.split("&");

//         var genre = userParams[0].split("=").pop();

//         searchAPI(genre)
// };

// function printResults(resultObject) {
//         console.log(resultObject);

//         // Create div for result cards
//         var resultCard = document.createElement('div');
//         resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//         // Create div for body content on result cards
//         var resultBody = document.createElement('div');
//         resultBody.classList.add('card-body');
//         resultCard.append(resultBody);

//         // Create h3 element for result title
//         var movieTitle = document.createElement('h3');
//         movieTitle.textContent = resultObj.title;

//         var bodyContentEl = document.createElement('p');
//         bodyContentEl.innerHTML =
//         '<strong>Date:</strong> ' + resultObj.date + '<br/>';

//         if (resultObj.subject) {
//                 bodyContentEl.innerHTML +=
//                 '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
//                 } else {
//                 bodyContentEl.innerHTML +=
//                 '<strong>Subjects:</strong> No subject for this entry.';
//         }
//         if (resultObj.description) {
//                 bodyContentEl.innerHTML +=
//                 '<strong>Description:</strong> ' + resultObj.description[0];
//         } else {
//                 bodyContentEl.innerHTML +=
//                 '<strong>Description:</strong>  No description for this entry.';
//         };

//         var watchButtonEl = document.createElement('a');
//         watchButtonEl.textContent = 'Watch Now';
//         watchButtonEl.setAttribute('href', resultObj.url);
//         watchButtonEl.classList.add('btn', 'btn-dark');

//         var playlistButtonEl = document.createElement('a');
//         playlistButtonEl.textContent = 'Add to Playlist';
//         playlistButtonEl.setAttribute('href', resultObj.url);
//         playlistButtonEl.classList.add('btn', 'btn-dark');

//         var infoButtonEl = document.createElement('a');
//         infoButtonEl.textContent = 'More Info;
//         infoButtonEl.setAttribute('href', resultObj.url);
//         infoButtonEl.classList.add('btn', 'btn-dark');

//         resultBody.append(movieTitle, bodyContentEl, watchButtonEl, playlistButtonEl, infoButtonEl);

//         resultContentEl.append(resultCard);
// };

// function searchApi(genre) {

//         if (genre) {
//                 locQueryUrl = 'https://www.loc.gov/' + genre + '/?fo=json';
//         }
        
//         fetch("https://unogsng.p.rapidapi.com/genres", {
// 	        "method": "GET",
// 	        "headers": {
// 		        "x-rapidapi-key": "917c1e408cmshe632e5d6739846dp1cf501jsn9642ae4176f8",
// 		        "x-rapidapi-host": "unogsng.p.rapidapi.com"
// 	        }
//         })
//         .then(function (response) {
//                 if (!response.ok) {
//                         throw response.json();
//                 }

//                 return response.json();
//         })
//         .then(function (localResponse) {
//                 resultTextEl.textContent = localResponse.genre;

//                 console.log(localResponse);

//                 if (!localResponse.results.length) {
//                         console.log('No results!');
//                         resultConteltEl.innerHTML = "<h3>No results found, sorry!</h3>";
//                 } else {
//                         resultContentEl.textContent = "";
//                         for (var i = 0; i < localResults.results.lengthl; i++) {
//                                 printResults(localResponse.results[i]);
//                         }
//                 }
//         })
//         .catch(function (error) {
//                 console.error(error);
//         });
// };

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
// var urlAA = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Action%20%26%20Adventure";

// var urlComedies = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Comedies";

// var urlDrama = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Drama";

// var urlHorrorMovies = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Horror%20Movies";

// var urlDocu = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Documentaries";

// var urlRomance =  "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Romantic%20Movies"; 

// var urlSciFi = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Sci-Fi%20%26%20Fantasy";

// var urlSports =  "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Sports%20Movies";

// var urlThriller = "https://netflix-unofficial.p.rapidapi.com/api/search?genre=Thrillers"; 


// //Action and Adventure
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlAA,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Comedies
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlComedies,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Drama
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlDrama,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Horror Movies
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlHorrorMovies,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Documentary
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlDocu,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Documentary
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlDocu,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Romance
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlRomance,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //SciFi
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlSciFi,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Sports
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlSports,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// //Thriller
// settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": urlThriller,
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "a905819813mshb487c4aa03c8e57p1f0687jsnfe693ad390a5",
//         "x-rapidapi-host": "netflix-unofficial.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });