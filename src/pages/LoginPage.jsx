import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn, Phone, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const validatePhone = phone => {
    const regex = /^\+\d{7,15}$/
    return regex.test(phone)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    if (!phoneNumber) {
      setError('Phone number is required')
      return
    }

    if (!validatePhone(phoneNumber)) {
      setError(
        'Please enter a valid international format (+XXX followed by 9 digits)'
      )
      return
    }

    setIsLoading(true)
    navigate('/home')
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-white'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md glass-card p-8 rounded-2xl'
      >
        <div className='flex flex-col text-black items-center mb-8'>
          <div className='p-4 bg-blue-300 rounded-2xl mb-4'>
            <LogIn className='w-8 h-8 text-white' />
          </div>
          <h1 className=' text-black font-semibold font-mono text-2xl tracking-tight'>
            Welcome Back
          </h1>
          <p className='text-slate-700 mt-2'>Login to manage your account</p>
        </div>

        <form>
          <div>
            <label className='text-sm font-medium text-slate-500 ml-2'>
              Phone Number
            </label>
            <section className='flex gap-2 max-sm:flex-col sm:w-110'>
              <div className='relative text-black border-gray-500 rounded-2xl px-4 gap-5 group border-2 w-full flex justify-between items-center   h-15'>
                <Phone className=' text-black group-focus-within:text-indigo-400 transition-colors' />
                <input
                  type='tel'
                  placeholder='+254712345678'
                  className=' outline-none h-full   w-full '
                  value={phoneNumber}
                  onChange={e => {
                    setPhoneNumber(e.target.value), setError(false)
                  }}
                />
              </div>
              <button
                onClick={e => {
                  handleSubmit(e)
                }}
                className='px-10 cursor-pointer rounded-3xl font-bold bg-blue-400 py-4'
              >
                login
              </button>
            </section>
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className='flex items-center gap-2 text-rose-400 text-sm mt-2 ml-1'
              >
                <AlertCircle className='w-4 h-4' />
                <span>{error}</span>
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default LoginPage
