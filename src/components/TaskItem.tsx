import { Trash } from "phosphor-react";
import { Task } from "../types";
import cn from "../utils";
import Checkbox from "./Checkbox";

interface TaskItemProps {
  task: Task,
  onCheckboxClick: (isDone: boolean) => void;
  onDeleteTask: () => void;
}

export default function TaskItem({ task, onCheckboxClick, onDeleteTask }: TaskItemProps) {
  return (
    <li className="flex gap-3 p-4 bg-gray-500 border border-gray-400 rounded-lg">
      <Checkbox checked={task.done} onChange={onCheckboxClick} />
      <p className={cn("grow text-sm leading-[1.6]", task.done && "text-gray-300 line-through")}>{task.text}</p>
      <button className="text-gray-300 p-1.5 hover:text-danger hover:bg-gray-400 rounded" onClick={onDeleteTask}><Trash /></button>
    </li>
  )
}