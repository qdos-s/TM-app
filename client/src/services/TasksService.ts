import $api from '../http'
import {AxiosResponse} from 'axios'
import {ITasksResponse} from "../models/response/TasksResponse";

export default class TasksService {
    static async createTasks(task: string): Promise<AxiosResponse<ITasksResponse>> {
        return $api.post<ITasksResponse>('/tasks', {task})
    }

    static async removeTask(task: string): Promise<AxiosResponse<ITasksResponse>> {
        return $api.post<ITasksResponse>('/remove-task', {task})
    }
}