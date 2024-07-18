import { PlusCircle } from "phosphor-react";
import { useState } from "react";

interface ToDoFormProps {
  onTaskCreation: (text: string) => void
}

export default function ToDoForm({ onTaskCreation }: ToDoFormProps) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onTaskCreation(taskText)
    setTaskText('')
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.setCustomValidity('')
    setTaskText(e.target.value)
  }

  const handleInvalidInput: React.FormEventHandler<HTMLInputElement> = (e) => {
    e.currentTarget.setCustomValidity('Campo obrigatório')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center gap-2 relative -top-[1.75rem] mb-9'>
      <input
        value={taskText}
        onChange={handleInputChange}
        onInvalid={handleInvalidInput}
        required
        placeholder='Adicione uma nova tarefa'
        className='grow p-4 bg-gray-500 placeholder:text-gray-300 rounded-lg focus:outline focus:outline-1 focus:outline-purple-dark'
      />
      <button
        type="submit"
        className='p-4 bg-blue-dark hover:bg-blue rounded-lg flex gap-2 items-center font-bold text-sm'
      >
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </form>
  )
}