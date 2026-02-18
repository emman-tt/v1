import { MapPin } from "lucide-react";

export function LocationSection ({item}) {
  return (
    <div className='glass-card rounded-3xl pt-0 p-8'>
      <h3 className='text-lg font-semibold text-black mb-6 flex items-center gap-2'>
        <MapPin className='w-5 h-5 text-black' />
        Location
      </h3>
      <div className='bg-black rounded-2xl p-6 border border-white/5'>
        <p className='text-white mb-1'>
          {item.address.suite}, {item.address.street}
        </p>
        <p className='text-white mb-4'>
          {item.address.city}, {item.address.zipcode}
        </p>
        <div className='flex items-center gap-4 text-xs font-mono text-slate-500'>
          <span>LAT: {item.address.geo.lat}</span>
          <span>LNG: {item.address.geo.lng}</span>
        </div>
      </div>
    </div>
  )
}
