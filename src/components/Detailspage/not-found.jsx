import { NavLink } from "react-router-dom";

export function NotFound () {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <div className='bg-rose-500/5 border border-rose-500/10 rounded-2xl p-8 text-center'>
        <p className='text-rose-400 mb-6'>{error || 'User not found'}</p>
        <NavLink to={'/'} className='btn-primary'>
          Back to Community
        </NavLink>
      </div>
    </div>
  )
}
