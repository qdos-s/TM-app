import React, {FC, useContext, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm"
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import './css/App.css'
import Welcome from "./components/welcome";
import Home from "./components/home";
import AddTime from "./components/addTime";
import MyTasks from "./components/myTasks";
import TimeEntries from "./components/timeEntries";

const App: FC = () => {
    const {store} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={<LoginForm />}/>
            <Route path="/registration" element={<RegistrationForm />}/>
            <Route path="/registration/welcome" element={<Welcome />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/add-time" element={<AddTime />} />
            <Route path="/my-tasks" element={<MyTasks />} />
            <Route path="/my-time-entries" element={<TimeEntries />} />
        </Routes>
    )
}

export default observer(App);
