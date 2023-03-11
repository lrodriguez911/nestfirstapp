import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  // eslint-disable-next-line prettier/prettier
  providers: [TasksService]
})
export class TasksModule {}
