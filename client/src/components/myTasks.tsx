import React, {FC, useContext, useEffect, useState} from 'react';
import NavBar from "./navBar";
import '../css/myTasks.css'
import FlipMove from "react-flip-move";
import {Context} from "../index";
import {API_URL} from "../http";

const MyTasks: FC = () => {
    const [tasks, setTasks] = useState([] as any)
    const [userInput, setUserInput] = useState('')
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

    const addTask = (userInput: any) => {
        if (userInput) {
            const newTask = {
                id: Math.random().toString(36).substring(2,9),
                task: userInput
            }
            setTasks([...tasks, newTask])
        }
    }

    const removeTask = (id: any) => {
        setTasks([...tasks.filter((task: any) => task.id !== id)])
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e: any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
            store.createTasks(userInput)
        }
    }
    return (
        <>
            <div className='vh-100 bg-image homeBg'>
                <NavBar />
                <div className="mask gradient-custom-3 changeMask">
                    <form onSubmit={handleSubmit} className="form-class">
                        <div className="form-container">
                            <div>
                                <input type="text"
                                       value={userInput}
                                       onChange={handleChange}
                                       onKeyDown={handleKeyPress}
                                       className="inputText"
                                       placeholder="Type value..."/>
                                <button className="taskButton"
                                        onClick={() => store.createTasks(userInput)}>
                                    Save
                                </button>
                            </div>
                            <div>
                                <input type="search"
                                       placeholder="Search everything"
                                       className="inputText"/>
                                <button className="taskButton">Search</button>
                            </div>
                        </div>
                        <div className="task-elements">
                            <FlipMove duration={250} easing="ease-out">
                                {tasks.length === 0 ? <div className="item-task">The list is empty</div> : (
                                    tasks.map((task: any) => {
                                        return (
                                            <div key={task.id} className="item-task">
                                                <div className="task-text">
                                                    {task.task}
                                                </div>
                                                <div className="task-delete" onClick={() => {
                                                    store.removeTask(task.task)
                                                    removeTask(task.id)
                                                }}>
                                                    &#10006;
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </FlipMove>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyTasks;