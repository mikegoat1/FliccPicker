
let url = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';
 
//  fetch(url, { method: 'Get' })
//      .then((res) => res.json())
//      .then((json) => {
//          console.log(json);
//      });


     fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        //Testing Selector 
        console.log($("input:checked"));
        // Grabs all the selected buttons on starterPage
        sourceCheck(); 
        function sourceCheck(){
            let checkedEl = $("input:checked"); 
            let selected = [];

            $.each(checkedEl, function(){
                selected.push($(this).val()); 
            });
            //Console logs all selected in a string
            console.log("You have selected, " , selected.join(", "))

        }
        //On click of submit button calls function sourceChecks
        $("button[value=button]").on("click", sourceCheck);

        // Genre URL 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0'

        // "Action & Adventure", "Animation", "Anime", "Comedy" "Crime" "Documentary", "Drama", "Family","Horror","Kids", "Musical", "Mystery", "Romance", "Sci-Fi & Fantasy","Sports","Supernatural","Thriller", "War", "Western",

        
