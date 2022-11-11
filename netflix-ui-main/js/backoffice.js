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
