// fetch("https://striveschool-api.herokuapp.com/api/movies", {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk"
//   }
// })

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk",
    "Content-Type": "application/json"
  }
}

async function getCategories() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies",
    options
  )
  const categories = await response.json()
  console.log(categories)
  return categories
}

function renderCategories(listOfCategories) {
  let carouselContainer = document.getElementById("main-container")

  listOfCategories.forEach((category) => {
    const categorySection = document.createElement("div")
    categorySection.innerHTML = `
        <h5 class="text-light mt-2 mb-2">${category}</h5>
        <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                 <div class="carousel-item active">
                     <div class="movie-row">
                          <div class="row" id="${category}">
                          </div>
                     </div>
                 </div>
            </div>
            <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#new-releases"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#new-releases"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      
        `
    carouselContainer.appendChild(categorySection)
  })
  listOfCategories.forEach((category) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/movies/${category}`,
      options
    )
      .then((response) => {
        return response.json()
      })
      .then((movies) => {
        console.log(movies)
        let row = document.getElementById(`${category}`)
        movies.forEach((movie) => {
          row.innerHTML += `<div class="col-md-2">
        <img class="movie-cover" src="${movie.imageUrl}" />
        </div>`
        })
      })
  })
}

// const loadMovies = () => {
//   fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
//     headers: {
//       method: "GET",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk",

//       "Content-Type": "application/json"
//     }
//   })
//     .then((response) => response.json())
//     .then((movie_genre) => {
//       console.log(movie_genre)
//       displayGenres(movie_genre)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

window.onload = async () => {
  const categories = await getCategories()
  renderCategories(categories)
}
