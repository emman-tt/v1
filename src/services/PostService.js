import axios from 'axios'
export const fetchItems = async () => {
  try {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    const postsData = buildRandomPosts(posts.data)
    const usersData = users.data
    return { postsData, usersData }
  } catch (err) {
    console.log(err)
  }
}

function buildRandomPosts (posts) {
  let arr = []

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * 50) + 1
    arr.push(posts[randomIndex])
  }
  return arr
}
