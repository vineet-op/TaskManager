import './App.css'
import Login from './components/Login'
import ListView from './components/List/ListView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Kanban/Board'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import useTodoStore, { TaskStatus } from './store/store'

function App() {
  const { updateTask } = useTodoStore()

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      updateTask(active.id as string, {
        status: over.id as TaskStatus
      })
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <BrowserRouter>
        <div className=''>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/create' element={<ListView />} />
            <Route path='/kb' element={<Board />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DndContext>
  )
}

export default App
