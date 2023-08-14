const url =
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e29b5db1c2msh582fd7a06e2b511p1302f0jsn115348dc42f1",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};


const movieCon = document.getElementById('movieCon')
const input = document.getElementById('keyword')

input.addEventListener('input', (e) => {
    let keyword = e.target.value;

  setTimeout(() => {
    getMovie(keyword);
  }, 500);
})

async function getMovie(keyword) {
    let response = await fetch(url.concat(keyword), options)
    let data = await response.json()

        let movieList = data.d;
             movieList.map((movie) => {
               movieCon.innerHTML += `<div class='col-md-4'>
        <p>${movie.l}</p>

        <img src='${movie.i.imageUrl}' class='img-fluid'>
        </div>`;
             }); 
}

// getMovie()