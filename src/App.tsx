import './App.css'
import Login from './components/Login'
import ListView from './components/List/ListView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Kanban/Board'


function App() {



  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/create' element={<ListView />} />
          <Route path='/kb' element={<Board />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
