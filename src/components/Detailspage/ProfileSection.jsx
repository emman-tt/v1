import { User } from 'lucide-react'

export function ProfileSection ({ item }) {
  return (
    <div className='glass-card rounded-3xl p-8 text-center sticky top-8'>
      <div className='w-24 h-24 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6'>
        <User className='w-12 h-12 text-black' />
      </div>
      <h2 className='text-2xl font-bold text-black mb-1'>{item.username}</h2>
      <p className='text-black font-mono text-sm mb-6'>@{item.name}</p>

      <div className='space-y-2 pt-6 border-t border-white/5'>
        <p className='text-xs text-slate-500 uppercase tracking-widest font-semibold'>
          User ID
        </p>
        <p className='text-xl font-mono text-black'>#00{item.id}</p>
      </div>
    </div>
  )
}
