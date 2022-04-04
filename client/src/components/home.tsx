import React, {FC} from 'react';
import NavBar from "./navBar";
import '../css/home.css'
import {Link} from "react-router-dom";

const Home: FC = () => {
    return (
        <>
            <div className='vh-100 bg-image homeBg'>
                <NavBar />
                <div className="mask gradient-custom-3 changeMask">
                    <p className="thankMsg">
                        CHOOSE ACTION
                    </p>
                    <Link to="/add-time">
                        <button type="button"
                                className="btn btn-white customBtn">
                            ADD TIME
                        </button>
                    </Link>
                    <Link to="/">
                        <button type="button"
                                className="btn btn-white customBtn">
                            MY TIME ENTRIES
                        </button>
                    </Link>
                    <Link to="/">
                        <button type="button"
                                className="btn btn-white customBtn">
                            MY TASKS
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;