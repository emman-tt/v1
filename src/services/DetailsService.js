import axios from 'axios'

export const fetchDetails = async id => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )

    const details = response.data
    return { details }
  } catch (err) {
    console.log(err)
  }
}
