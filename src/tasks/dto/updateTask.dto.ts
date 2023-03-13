/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.entity';
import { IsString, IsOptional, IsIn } from 'class-validator'
/* eslint-disable prettier/prettier */

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRES, TaskStatus.PENDING])
    status?: TaskStatus

}