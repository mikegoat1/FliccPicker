// const iables
let storedMovieTitle;
const getList = [];


const resultContentEl = document.querySelector("#result-content");
const playlistContentEl = document.querySelector("#playlist-content");
//search bar url
const userParams = document.location.search;
console.log(userParams);
const genre = userParams.split("?").pop();
console.log(genre)


$(document).ready(function () {
    $.getJSON('/data/genres.json', function (data) {
        let genreList = $('#ul');
        $.each(data, function (index, genre) {
            let listItem = $('<li>', {
                class: 'list-group-item',
                text: genre.genre,
                click: function () {
                    generateMovieCards(genre.genre);
                }
            });
            genreList.append(listItem);
        });
    });

    // Function to generate movie cards based on genre
    function generateMovieCards(genre) {
        $('#result-content').empty(); // Clear existing movie cards
        $.getJSON('../data/movies.json', function (data) {
            let filteredMovies = data.filter(movie => movie.genres.includes(genre));
            filteredMovies.forEach(movie => {
                createMovieCard(movie);
            });
        });
    }
    // Parse the genre parameter from the URL
    const userParams = new URLSearchParams(decodeURIComponent(window.location.search));
    console.log(userParams);
    const genre = userParams.get('genrelist');
    console.log(genre);

    // Load movies from movies.json and filter based on the genre parameter
    $.getJSON('../data/movies.json', function (data) {
        let filteredMovies = data.filter(movie => movie.genres.includes(genre));
        filteredMovies.forEach(movie => {
            console.log(movie);
            createMovieCard(movie);
        });
    });

    // Function to create a movie card
    function createMovieCard(movie) {
        const resultCard = $('<div>', { class: 'card text-white mb-3 p-3', style: 'border-color: #185ADB; background-color: #FFC947;' });
        const resultBody = $('<div>', { class: 'card-body', style: 'background-size: contain; background-image: url(' + movie.backdrop_path + ')' });
        const movieTitle = $('<h3>').text(movie.title);
        const bodyContentEl = $('<p>').html('<strong>Date:</strong> ' + movie.release_date + '<br/>' +
            '<strong>Ratings:</strong> ' + (movie.imdbrating || 'No rating for this entry.') + '<br/>' +
            '<strong>Description:</strong> ' + (movie.overview || 'No description for this entry.'));
        const watchButtonEl = $('<a>', { class: 'btn btn-dark', href: 'https://www.netflix.com/title/' + movie._id, text: 'Watch Now' });
        const favoriteButtonEl = $('<button>', { class: 'btn btn-dark m-2', text: 'Add to Favorites', value: movie.title, id: 'favorite' });
        resultBody.append(movieTitle, bodyContentEl, watchButtonEl, favoriteButtonEl);
        resultCard.append(resultBody);
        $('#result-content').append(resultCard);
    }
    // Event listener for the favorite button
    $('#result-content').on('click', '#favorite', function (event) {
        const movieTitle = $(this).val();
        console.log('Favorite:', movieTitle);
        addToFavorites(movieTitle);
    });
    function addToFavorites(movieTitle) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(movieTitle)) {
            favorites.push(movieTitle);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }
    // Grabs Selected from Starter Page
    function sourceCheck() {
        let genreInputVal = $("#genre-input").val();
        console.log(genreInputVal);

        let queryString = window.location.origin + "/views/results_page.html?genrelist=" + encodeURIComponent(genreInputVal);

        document.location.replace(queryString);
    }

    // On click of submit button calls function sourceCheck
    $("button[value=button]").on("click", function (event) {
        event.preventDefault();
        sourceCheck();
    });
});

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
    $(".jokes").text(response)
});

// const settingsMovie = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://movies-api14.p.rapidapi.com/movies',
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'e63631f8d1msh168f938e27f4288p179d82jsn16e3f45361fa',
// 		'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
// 	}
// };

// $.ajax(settingsMovie).done(function (response) {
// 	console.log(response);
// });


