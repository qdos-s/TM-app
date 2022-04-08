import React, {FC, useEffect, useState} from 'react';
import NavBar from "./navBar";
import {API_URL} from "../http";
import '../css/timeEntries.css'
import {log} from "util";

const TimeEntries: FC = () => {
    const [objs, setObjs] = useState([] as any)
    useEffect(() => {
        fetch(API_URL + '/times')
            .then(res => res.json())
            .then(data => {
                setObjs([...objs, ...data])
            })
    }, [])

    return (
        <>
            <div className='vh-100 bg-image homeBg'>
                <NavBar />
                <div className="mask gradient-custom-3 changeMask">
                    <table className="table customTable">
                        <thead className="thead">
                            <tr>
                              <th scope="col" className="thDate">Date Worked</th>
                              <th scope="col" className="thTime">Time Worked</th>
                              <th scope="col" className="thTask">Task</th>
                              <th scope="col" className="thDetail">Description of Worked Performed</th>
                            </tr>
                        </thead>
                        <div className="tbodyContainer">
                            <tbody className="tbody">
                                {objs.map((obj: any) => {
                                    return (
                                        <tr>
                                            <td className="thDate">
                                                {obj.date}
                                            </td>
                                            <td className="thTime">
                                                {obj.hours} h {obj.minutes} m
                                            </td>
                                            <td className="thTask">
                                                {obj.task}
                                            </td>
                                            <td className="thDetail">
                                                {obj.details}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </div>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TimeEntries;