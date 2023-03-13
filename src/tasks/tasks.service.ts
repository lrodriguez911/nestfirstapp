/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  
  private tasks: Task[] = [{
    id: '1',
    title: 'first task',
    description: 'some task',
    status: TaskStatus.PENDING
  }]
  getAllTask(){
    return this.tasks;
  }
  createTask(title: string, description: string){
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING
    }
    this.tasks.push(task)
    return task;
  }
  deleteTask(id : string){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
  getTaskByid(id: string): Task{
    return this.tasks.find(task => task.id === id)
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task{
    const task = this.getTaskByid(id)
    const newTask = Object.assign(task, updatedFields)
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
    return newTask;
  }
  
}
