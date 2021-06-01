



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