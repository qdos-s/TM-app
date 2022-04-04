import React, {FC, useContext, useEffect, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm"
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import './css/App.css'
import Welcome from "./components/welcome";
import Home from "./components/home";
import AddTime from "./components/addTime";

const App: FC = () => {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Routes>
            <Route path="/" element={<LoginForm />}/>
            <Route path="/registration" element={<RegistrationForm />}/>
            <Route path="/registration/welcome" element={<Welcome />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/add-time" element={<AddTime />} />
        </Routes>
    )
}

export default observer(App);
