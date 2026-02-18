import { Heart, MessageCircle, Bookmark, User2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function PostContent ({ item, users }) {
  const [popup, showPopup] = useState(false)
  const navigate = useNavigate()

  function findUser (id, type) {
    const user = users.find(item => item.id === id)
    const name = type === 'full_name' ? user.name : user.username
    return name
  }
  function createRandom (number = 20) {
    const random = Math.floor(Math.random() * number) + 1
    return random
  }

  const handleMouseMove = e => {
    showPopup({
      show: true,
      x: e.clientX,
      y: e.clientY
    })
  }

  const handleMouseLeave = () => {
    showPopup(false)
  }

  return (
    <section
      onClick={() => navigate(`/details/${item.userId}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className=' rounded-2xl relative cursor-pointer hover:shadow-xl justify-between pb-5 shadow-lg w-full flex-col flex gap-5 h-70'
    >
      {popup && (
        <div
          style={{
            position: 'fixed',
            left: popup.x + 10,
            top: popup.y + 10,
            backgroundColor: 'black',
            border: '1px solid black',
            padding: '8px',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
            zIndex: 40,
            color: 'white'
          }}
        >
          Click anywhere to open {findUser(item.userId, 'username')} user
          details
        </div>
      )}
      <section>
        <header className='w-full mt-2 flex h-max justify-between px-5'>
          <div className='flex gap-3 w-full'>
            <span className=' rounded-full border flex  px-2 bg-slate-50 border-blue-300  pb-0 items-end justify-center'>
              <User2 className='text-blue-600' size={30} />
            </span>
            <div className=' flex flex-col  h-full gap-0 '>
              <p className='font-semibold'>
                {findUser(item.userId, 'username')}
              </p>
              <p className='text-slate-400 text-sm'>
                @{findUser(item.userId, 'full_name')}
              </p>
            </div>
          </div>

          <button className='text-3xl font-extrabold items-center flex h-full text-slate-700 cursor-pointer'>
            ...
          </button>
        </header>

        <section className='px-5 pt-3'>
          <p className='text-[15px] '>{item.body}</p>
        </section>
      </section>

      <ul className=' w-full flex justify-between px-6 text-sm font-light'>
        <li className='flex gap-2 items-center'>
          <Heart size={15} />
          <div className='flex gap-1'>
            <p className='font-semibold'>{createRandom(150)}</p>
            <p>Likes</p>
          </div>
        </li>
        <li className='flex gap-2 items-center'>
          <MessageCircle size={15} />
          <div className='flex gap-1'>
            <p className='font-semibold'>{createRandom(60)}</p>
            <p>Comments</p>
          </div>
        </li>

        <li className='flex gap-2 items-center'>
          <Bookmark size={15} />
          <div className='flex gap-1'>
            <p className='font-semibold'>{createRandom(60)}</p>
            <p>Bookmarks</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
