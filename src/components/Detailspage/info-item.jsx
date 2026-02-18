import { ExternalLink } from 'lucide-react'
import React from 'react'
export const InfoItem = ({ icon, label, value, isLink }) => (
  <div>
    <p className='text-sm text-slate-500 mb-2'>{label}</p>
    <div className='flex items-center gap-2 text-black'>
      {React.cloneElement(icon, { className: 'w-4 h-4 text-black' })}
      {isLink ? (
        <a
          href={`https://${value}`}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-black transition-colors flex items-center gap-1'
        >
          {value} <ExternalLink className='w-3 h-3' />
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  </div>
)
