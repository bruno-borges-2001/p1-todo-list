import { useCallback, useEffect, useMemo, useState } from 'react'
import { v4 as generateId } from 'uuid'
import { Clipboard } from './assets'
import Header from './components/Header'
import TaskItem from './components/TaskItem'
import ToDoForm from './components/ToDoForm'
import { Task } from './types'

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const _tasks = sessionStorage.getItem('tasks')
    if (!_tasks) return []
    return JSON.parse(_tasks)
  })

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleCreateTask = (text: string) => {
    const newTask: Task = {
      id: generateId(),
      text,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  const handleToggleTask = useCallback((id: string) => (isDone: boolean) => {
    setTasks((prev) => {
      const index = prev.findIndex(el => el.id === id)

      if (index === -1) return prev

      const newTasks = [...prev]
      newTasks[index].done = isDone
      return newTasks
    })
  }, [])

  const handleDeleteTask = useCallback((id: string) => () => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }, [])

  const { done, total } = useMemo(() => {
    return tasks.reduce((acc, task) => {
      return {
        done: task.done ? acc.done + 1 : acc.done,
        total: acc.total + 1
      }
    }, { done: 0, total: 0 })
  }, [tasks])

  return (
    <div className="flex flex-col">
      <Header />

      <main className='w-full max-w-[46rem] px-4 mx-auto'>
        <ToDoForm onTaskCreation={handleCreateTask} />

        <section>
          <header className='font-bold flex items-center justify-between pb-6'>
            <div className='flex items-center gap-2'>
              <p className='text-sm text-blue'>Tarefas criadas</p>
              <p className='bg-gray-400 text-gray-200 rounded-full text-xs px-2 py-0.5'>{total}</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-sm text-purple'>Concluídas</p>
              <p className='bg-gray-400 text-gray-200 rounded-full text-xs px-2 py-0.5'>{total === 0 ? 0 : `${done} de ${total}`}</p>
            </div>
          </header>

          {tasks.length === 0 ? (
            <div className='grid place-items-center text-gray-300 gap-4 py-16 px-6 border-t border-t-gray-400'>
              <Clipboard />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          ) : (
            <ul className='flex flex-col gap-3'>
              {tasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onCheckboxClick={handleToggleTask(task.id)}
                  onDeleteTask={handleDeleteTask(task.id)}
                />))}
            </ul>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
