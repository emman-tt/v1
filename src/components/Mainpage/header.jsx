import { LogOut, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { searchFilter } from '../../store/Store'
export default function Header () {
  const dispatch = useDispatch()

  const searchValue = useSelector(state => state.posts.searchValue)

  function handleSearch (e) {
    dispatch(searchFilter(e.target.value))
  }
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className='text-4xl font-bold  tracking-tight'>Community</h1>
        <p className='text-slate-400 mt-2'>
          Manage and explore new posts in the network
        </p>
      </motion.div>

      <div className='flex items-center gap-4 h-15 '>
        <div className='relative group grow flex gap-5 h-full md:w-80 items-center rounded-3xl border border-gray-500 p-2'>
          <Search className='  w-5 h-5  transition-colors' />
          <input
            type='text'
            placeholder='Search users by name or post...'
            className=' h-full w-full outline-0'
            value={searchValue}
            onChange={e => handleSearch(e)}
          />
        </div>
        <NavLink
          to={'/auth'}
          className='btn-secondary flex items-center gap-2'
          title='Logout'
        >
          <LogOut className='w-5 h-5' />
          <span className=''>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}
