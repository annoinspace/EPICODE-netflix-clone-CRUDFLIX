window.onload = async () => {
  async function onFormSubmit(event, form) {
    event.preventDefault()

    const newMovie = {
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      genre: document.querySelector("#genre").toLowerCase().value,
      imageUrl: document.querySelector("#imageUrl").value
    }

    const options = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const endpoint = "https://striveschool-api.herokuapp.com/api/movies"
      const response = await fetch(endpoint, options)
      if (response.ok) {
        alert("new movie added")
      } else {
        throw new Error("Error while creating new movie")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
