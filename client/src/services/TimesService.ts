import $api from '../http'
import {AxiosResponse} from 'axios'
import {ITimesResponse} from "../models/response/TimesResponse";

export default class TasksService {
    static async fillTime(date: string, task: string, hours: number, minutes: number, details: string): Promise<AxiosResponse<ITimesResponse>> {
        return $api.post<ITimesResponse>('/times', {date, task, hours, minutes, details})
    }

    static async getTime(): Promise<AxiosResponse<ITimesResponse>> {
        return $api.post<ITimesResponse>('/times')
    }
}