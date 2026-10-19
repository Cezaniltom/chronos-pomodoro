import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel) {
  if(task.completeDate) return 'Completa'
  if (task.interruptDate) return 'Interrompida'
  return 'Em progresso'
}