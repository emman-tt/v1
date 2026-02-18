export default function Skeleton () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6'>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className='glass-card bg-slate-200 rounded-2xl p-6 h-64 animate-pulse'
        >
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-black/30 rounded-full' />
            <div className='space-y-2'>
              <div className='h-4 w-24 bg-black/20 rounded' />
              <div className='h-3 w-32 bg-black/20 rounded' />
            </div>
          </div>
          <div className='space-y-4 pt-4 border-t border-white/5'>
            <div className='h-3 w-full bg-black/20 rounded' />
            <div className='h-3 w-2/3 bg-black/20 rounded' />
          </div>
        </div>
      ))}
    </div>
  )
}
