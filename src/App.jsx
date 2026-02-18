import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'

function App () {
  return (
    <Router>
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' index element={<Navigate to={'/auth'} />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/auth' element={<LoginPage />} />
          <Route path='/details/:id' element={<DetailPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
