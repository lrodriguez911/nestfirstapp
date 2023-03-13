/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto'
import { UpdateTaskDto } from './dto/updateTask.dto'


@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService){
  }
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTask()
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDto){
    return this.tasksService.createTask(newTask.title, newTask.description)
  }
  @Delete(":id")
  deleteTask(@Param('id') id: string){
    this.tasksService.deleteTask(id)
  }

  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() updatedFields: UpdateTaskDto){
    /* if(updatedFields.status){
      updatedFields.status = updatedFields.tas
    } */
    return this.tasksService.updateTask(id, updatedFields)
  }
}
