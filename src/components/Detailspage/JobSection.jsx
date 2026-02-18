import { Briefcase } from 'lucide-react'

export function JobSection ({ item }) {
  return (
    <div className='glass-card rounded-3xl pt-0 p-8'>
      <h3 className='text-lg font-semibold text-black mb-6 flex items-center gap-2'>
        <Briefcase className='w-5 h-5 text-black' />
        Employment Details
      </h3>
      <div className='space-y-6'>
        <div>
          <p className='text-sm text-slate-500 mb-1'>Company</p>
          <p className='text-xl text-black font-medium'>{item.company.name}</p>
        </div>
        <p className='text-black leading-relaxed italic'>
          "{item.company.catchPhrase}. {item.company.bs}"
        </p>
      </div>
    </div>
  )
}
