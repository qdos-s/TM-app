import React, {FC} from 'react';
import NavBar from "./navBar";
import '../css/welcome.css'
import { Link } from 'react-router-dom';

const Welcome: FC = () => {
    return (
        <>
            <div className="vh-100 bg-image"
                 style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'}}>
                <NavBar />
                <div className="mask gradient-custom-3 changeMask">
                    <p className="thankMsg">
                        Thank you for registration in TM App!<br/>
                        Hope you'll improve your personal time management processes using this App.<br/>
                        <span className="checkEmailMsg">(Also don't forget to activate your account.
                                                        We have sent you an email with an activation link)</span>
                    </p>
                    <Link to="/home">
                        <button type="button"
                                className="btn btn-white customBtn">
                            OK
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Welcome;