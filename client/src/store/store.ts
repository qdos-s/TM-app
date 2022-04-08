import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import * as toastr from "toastr"
import "../../node_modules/toastr/build/toastr.min.css";
import TasksService from "../services/TasksService";
import TimesService from "../services/TimesService";

export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = false
    task
    date
    hours
    minutes
    details

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    setTask(task: string) {
        this.task = task
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    setTime(date: string, task: string, hours: number, minutes: number, details: string) {
        this.date = date
        this.task = task
        this.hours = hours
        this.minutes = minutes
        this.details = details
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            if (response.status === 200) {
                window.location.href += 'home'
            }
        } catch (e) {
            toastr.error("Invalid data. Try again!")
            console.log(e)
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            if (response.status === 200) {
                window.location.href += '/welcome'
            }
        } catch (e) {
            toastr.error("Invalid data. Try again!")
            console.log(e)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e) {
            console.log(e)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})

            localStorage.setItem('token', response.data.accessToken)
            this.setUser(response.data.user)
            this.setAuth(true)
        } catch (e) {
            console.log(e)
        } finally {
            this.setLoading(false)
        }
    }

    async createTasks(task) {
        try {
            const response = await TasksService.createTasks(task)
            this.setTask(response.data.task)
        } catch (e) {
            console.log(e)
        }
    }

    async removeTask(task) {
        try {
            const response = await TasksService.removeTask(task)
            this.setTask(response.data.task)
        } catch (e) {
            console.log(e)
        }
    }

    async fillTime(date, task, hours, minutes, details) {
        try {
            const response = await TimesService.fillTime(date, task, hours, minutes, details)
            this.setTime(response.data.date, response.data.task, response.data.hours, response.data.minutes, response.data.details)
        } catch (e) {
            toastr.error("Invalid data. Please fill required fields!")
            console.log(e)
        }
    }
}