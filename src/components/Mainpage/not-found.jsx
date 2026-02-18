export default function NotFound ({ searchValue }) {
  return (
    <div className='text-center py-20'>
      <p className='text-slate-500'>
        No users or posts found matching "{searchValue}"
      </p>
    </div>
  )
}
