import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../services/PostService'
import { addPosts, addUsers } from '../store/Store'
import Skeleton from '../components/Mainpage/skeleton'
import NotFound from '../components/Mainpage/not-found'
import Header from '../components/Mainpage/header'
import { motion } from 'framer-motion'
import { setError } from '../store/Store'
import PostContent from '../components/Mainpage/post-content'
export default function MainPage () {
  const { posts, users, status, searchValue, errorMessage } = useSelector(
    state => state.posts
  )
  const dispatch = useDispatch()
  useEffect(() => {
    fetchItems().then(item => {
      const { postsData, usersData } = item

      if (!postsData || !usersData) {
        return dispatch(setError('Error fetching data'))
      }

      dispatch(addUsers(usersData))
      dispatch(addPosts(postsData))
    })
  }, [dispatch])

  const filteredposts = posts.filter(item => item.body.includes(searchValue))

  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 text-black lg:px-8 py-8'>
      <Header />

      {status === 'loading' ? (
        <Skeleton />
      ) : status === 'error' ? (
        <div className='text-center py-20 bg-rose-500/5 rounded-3xl border border-rose-500/10'>
          <p className='text-rose-400 text-lg font-semibold'>{errorMessage}</p>
        </div>
      ) : (
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10'
        >
          {status === 'loaded' &&
            posts.length > 0 &&
            filteredposts
              .slice(0, 20)
              .map(item => (
                <PostContent
                  key={`${item.id}-${Math.random()}`}
                  users={users}
                  item={item}
                />
              ))}
        </motion.div>
      )}

      {status === 'loaded' && filteredposts.length === 0 && (
        <NotFound searchValue={searchValue} />
      )}
    </div>
  )
}
