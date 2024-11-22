let storedMovieTitle;
const getList = [];


const userParams = document.location.search;
console.log(userParams);
const genre = userParams.split("?").pop();
console.log(genre)


$(document).ready(function () {
    $.getJSON('/data/genres.json', function (data) {
        let genreList = $('#ul');
        $.each(data, function (index, genre) {
            let listItem = $('<li>', {
                class: 'list-group-item sidebar-link',
                text: genre.genre,
                click: function () {
                    $('.sidebar-link').removeClass('active');
                    $(this).addClass('active');
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
        const resultCard = $('<div>', {
            class: 'card text-white mb-3 p-3',
            style: 'border: 1px solid rgba(0, 0, 0, 0.5); background: linear-gradient(to bottom, rgb(70, 80, 190), rgb(30, 30, 30)); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); width: 20rem;'
        });
        const resultImageTop = $('<img>', { class: 'card-img-top h-auto', src: movie.poster_path, alt: movie.title });
        const resultBody = $('<div>', { class: 'card-body', style: 'background-color: rgb(30, 30, 30);' });
        const movieTitle = $('<h5>', { style: 'color: rgb(255, 191, 3);' }).text(movie.title);
        const bodyContentEl = $('<p>', { style: 'color: rgb(245, 245, 245);' }).html('<strong>Date:</strong> ' + movie.release_date + '<br/>' +
            '<strong>Description:</strong> ' + (movie.overview || 'No description for this entry.'));
        const buttonContainer = $('<div>', { class: 'd-flex justify-content-between' });
        const watchButtonEl = $('<button>', {
            class: 'btn btn-dark btn-sm m-1',
            style: 'background-color: rgb(70, 80, 190); color: white; text-decoration: none; font-size: 0.8rem; transition: background-color 0.3s, box-shadow 0.3s;'
        }).append(
            $('<a>', {
                href: 'https://www.netflix.com/title/' + movie._id,
                text: 'Watch Now',
                target: '_blank',
                style: 'color: white; text-decoration: none; font-size: 0.8rem;'
            })
        );

        watchButtonEl.hover(
            function () {
                $(this).css({
                    'background-color': 'rgb(220, 20, 60)',
                    'box-shadow': '0 0 10px rgb(255, 191, 3)'
                });
            },
            function () {
                $(this).css({
                    'background-color': 'rgb(70, 80, 190)',
                    'box-shadow': 'none'
                });
            }
        );
        const favoriteButtonEl = $('<button>', {
            class: 'btn btn-dark btn-sm m-1',
            text: 'Add to Favorites',
            value: movie.title,
            id: 'favorite',
            style: 'background-color: rgb(70, 80, 190); color: white; font-size: 0.8rem; transition: background-color 0.3s;'
        });

        watchButtonEl.hover(
            function () { $(this).css('background-color', 'rgb(220, 20, 60)'); },
            function () { $(this).css('background-color', 'rgb(70, 80, 190)'); }
        );

        favoriteButtonEl.hover(
            function () { $(this).css('background-color', 'rgb(220, 20, 60)'); },
            function () { $(this).css('background-color', 'rgb(70, 80, 190)'); }
        );

        buttonContainer.append(watchButtonEl, favoriteButtonEl);
        resultBody.append(resultImageTop, movieTitle, bodyContentEl, buttonContainer);
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

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    homeLink.href = window.location.pathname;
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


