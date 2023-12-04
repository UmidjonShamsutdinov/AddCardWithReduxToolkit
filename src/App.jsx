import { Link } from 'react-router-dom'
import './App.css'
import RouteController from './routes/RouteController'

function App() {
  

  return (
    <>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/card">Card</Link>
      </div>
      <RouteController/>
    </>
  )
}

export default App
