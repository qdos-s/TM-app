import React, {FC, useContext, useEffect, useState} from 'react';
import NavBar from "./navBar";
import '../css/addTime.css'
import {Link} from "react-router-dom";
import {API_URL} from "../http";
import {Context} from "../index";

const AddTime: FC = () => {
    const [tasks, setTasks] = useState([] as any)
    const [date, setDate] = useState('')
    const [task, setTask] = useState('')
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [details, setDetails] = useState('')
    const {store} = useContext(Context)

    useEffect(() => {
        fetch(API_URL + '/tasks')
            .then(res => res.json())
            .then(data => {
                data.map(obj => {
                    obj.id = Math.random().toString(36).substring(2,9)
                    return obj
                })
                setTasks([...tasks, ...data])
            })
    }, [])

    const handleDate = (e) => {
        setDate(e.currentTarget.value)
    }

    const handleHours = (e) => {
        setHours(e.currentTarget.value)
    }

    const handleMinutes = (e) => {
        setMinutes(e.currentTarget.value)
    }

    const handleSelect = (e) => {
        setTask(e.currentTarget.value)
    }

    const handleDetails = (e) => {
        setDetails(e.currentTarget.value)
    }

    const handleSave = (e) => {
        store.fillTime(date, task, hours, minutes, details)
        setDate('')
        setTask('')
        setHours(0)
        setMinutes(0)
        setDetails('')
    }

    const handleSubmit = () => {
        store.fillTime(date, task, hours, minutes, details)
        if (date && task) {
            setTimeout(() => {
                window.location.href = window.location.origin + '/home'
            }, 1000)
        }
    }

    return (
        <>
            <div className='vh-100 bg-image homeBg'>
                <NavBar />
                <div className="mask gradient-custom-3 changeMask">
                    <div className="mainContainer">
                        <Link to="/home" className="addTimeString btn btn-white customBtn">ADD TIME</Link>
                        <div className="timeCont">
                            <div className="md-form md-outline input-with-post-icon datepicker">
                                <label htmlFor="example">Date Worked <sup className="requiredField">*required</sup></label>
                                <input placeholder="Select date"
                                       type="date"
                                       id="example"
                                       value={date}
                                       onChange={handleDate}
                                       className="form-control"/>
                            </div>
                            <div className="hrsAndMins">
                                <div className="timeBlock">
                                    <p className="selectTime">Hours</p>
                                    <input type="number"
                                           className="form-control"
                                           placeholder="0"
                                           value={hours}
                                           onChange={handleHours}
                                           min={0}
                                           max={24}/>
                                </div>
                                <div className="timeBlock">
                                    <p className="selectTime">Minutes</p>
                                    <input type="number"
                                           className="form-control"
                                           placeholder="0"
                                           value={minutes}
                                           onChange={handleMinutes}
                                           min={0}
                                           max={59}/>
                                </div>
                            </div>
                        </div>
                        <div className="tasksCont">
                            <label htmlFor="" className="tasksLabel">
                                Task(s) <sup className="requiredField">*required</sup>
                            </label>
                            <select className="form-select selectTask" multiple>
                                {tasks.length === 0 ? <option>Default task</option> : (
                                    tasks.map((task: any) => {
                                        return (
                                            <option key={task.id}
                                                    onClick={handleSelect}>{task.task}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                        <div className="form-group jobDetails">
                            <label htmlFor="exampleFormControlTextarea1">Job Details</label>
                            <textarea className="form-control"
                                      id="exampleFormControlTextarea1"
                                      value={details}
                                      onChange={handleDetails}
                                      rows={3}/>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-white btn-custom"
                                    onClick={handleSave}>
                                Save & Continue
                            </button>
                            <button className="btn btn-white btn-custom"
                                    onClick={handleSubmit}>
                                Submit & Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTime;