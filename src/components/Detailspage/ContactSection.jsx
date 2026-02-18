import { Globe, Mail, Phone, User } from 'lucide-react'
import { InfoItem } from './info-item'

export function ContactSection ({ item }) {
  return (
    <div className='glass-card rounded-3xl py-0 p-8'>
      <h3 className='text-lg font-semibold text-black mb-6 flex items-center gap-2'>
        <User className='w-5 h-5 text-black' />
        Contact Information
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <InfoItem icon={<Mail />} label='Email Address' value={item.email} />
        <InfoItem icon={<Phone />} label='Phone Number' value={item.phone} />
        <InfoItem
          icon={<Globe />}
          label='Website'
          value={item.website}
          isLink
        />
      </div>
    </div>
  )
}
