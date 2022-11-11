fetch("https://striveschool-api.herokuapp.com/api/movies", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk"
  }
})

const loadGenres = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies", {
    headers: {
      method: "GET",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk"
    }
  })
    .then((response) => response.json())
    .then((genres) => {
      console.log(genres)
      displayGenres(genres)
    })
    .catch((error) => {
      console.log(error)
    })
}

const loadMovies = () => {
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
    headers: {
      method: "GET",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk"
    }
  })
    .then((response) => response.json())
    .then((movie_genre) => {
      console.log(movie_genre)
      displayGenres(movie_genre)
    })
    .catch((error) => {
      console.log(error)
    })
}

const selectGenre = (genre) => {}

const displayGenres = (genres) => {
  let mainContainer = document.getElementById("main-container")

  let newGenre = document.createElement("div")

  genres.forEach((genre) => {
    newGenre.classList.add("movie-gallery", "m-2")
    newGenre.innerHTML = `  <h5 class="text-light", "mt-2", "mb-2">Trending Now</h5>`
  })
}
