import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { fetchDetails } from '../services/DetailsService'
import { NotFound } from '../components/Detailspage/not-found'
import { ProfileSection } from '../components/Detailspage/ProfileSection'
import { ContactSection } from '../components/Detailspage/ContactSection'
import { JobSection } from '../components/Detailspage/JobSection'
import { LocationSection } from '../components/Detailspage/LocationSection'
export default function DetailPage () {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDetails(id)
      .then(item => {
        setItem(item.details)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch user details')
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]'>
        <div className='w-12 h-12 border-4 border-black rounded-full animate-spin mb-4' />
        <p className='text-black animate-pulse'>Loading profile...</p>
      </div>
    )
  }

  if (error || !item) {
    return <NotFound />
  }

  return (
    <div className='max-w-4xl mx-auto px-0 py-8'>
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/home')}
        className='flex bg-blue-400   items-end max-sm:self-end p-3  rounded-xl cursor-pointer sm:p-4 sm:rounded-3xl text-white sm:items-center gap-2   transition-colors mb-5 group'
      >
        <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
        <span>Back to Community</span>
      </motion.button>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className='md:col-span-1'
        >
          <ProfileSection item={item} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:col-span-2 space-y-8'
        >
          <ContactSection item={item} />
          <JobSection item={item} />
          <LocationSection item={item} />
        </motion.div>
      </div>
    </div>
  )
}
