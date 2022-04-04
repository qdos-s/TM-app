import React, {FC} from 'react';
import NavBar from "./navBar";
import '../css/addTime.css'

const AddTime: FC = () => {
    return (
        <>
            <div className='vh-100 bg-image homeBg'>
                <NavBar />
                <div className="mask gradient-custom-3 changeMask">
                    <div className="mainContainer">
                        <div className="childContainer">
                            <div>
                                Date worked
                            </div>
                            <div>
                                Hours
                            </div>
                            <div>
                                Minutes
                            </div>
                        </div>
                        <div>
                            Task(s)
                        </div>
                        <div>
                            Job Detail
                        </div>
                        <div>
                            <button>
                                Save & Continue
                            </button>
                        </div>
                        <div>
                            <button>
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