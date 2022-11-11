async function onFormSubmit(event, form) {
  event.preventDefault()

  const newMovie = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#genre").value,
    imageUrl: document.querySelector("#imageUrl").value
  }

  const options = {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTk5Y2Y4MGYxYTAwMTVkOGEwNDAiLCJpYXQiOjE2NjgxNTk5MDAsImV4cCI6MTY2OTM2OTUwMH0.w4pMIn-xdzD1sPgqoESBbbpirfquHjeifJ0TmqSCBSk",
      "Content-Type": "application/json"
    }
  }

  //   const moviegenre = document.querySelector("#genre").value

  try {
    const endpoint = "https://striveschool-api.herokuapp.com/api/movies/"
    const response = await fetch(endpoint, options)
    if (response.ok) {
      alert("new movie added")
      form.reset()
    } else {
      throw new Error("Error while creating new movie")
    }
  } catch (error) {
    console.log(error)
  }
}

// ___________________ GETTING THE MOVIES LIST _____________________________//

const opt = {
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
    opt
  )
  const categories = await response.json()
  console.log(categories)
  return categories
}

function updateMovies(listOfCategories) {
  let movieList = document.getElementById("movie-list")
  console.log("working")

  listOfCategories.forEach((category) => {
    const categoryLiSection = document.createElement("div")
    categoryLiSection.innerHTML = `<h4  class="text-white">${category}</h4>
    <div >
    <ul id="movie-${category}"></ul>
     </div>`

    movieList.appendChild(categoryLiSection)

    listOfCategories.forEach((category) => {
      fetch(
        `https://striveschool-api.herokuapp.com/api/movies/${category}`,
        opt
      )
        .then((response) => {
          return response.json()
        })
        .then((movies) => {
          console.log(movies)
          let ul = document.getElementById(`movie-${category}`)
          movies.forEach((movie) => {
            let li = document.createElement("li")
            li.innerHTML = `${movie.name}`

            ul.appendChild(li)
            div.appendChild(ul)
          })
        })
    })
  })
}

window.onload = async () => {
  const categories = await getCategories()
  updateMovies(categories)
}
