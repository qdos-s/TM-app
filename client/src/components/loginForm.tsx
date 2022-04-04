import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import '../css/loginForm.css'
import {Link} from "react-router-dom";
//@ts-ignore
import logoTime from '../img/1289317.png'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
    return (
        <section className="vh-100 bg-image"
                 style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'}}>
            <div className="mainLogo">
                <p className="logoPhrase">TIME MANAGEMENT APP</p>
                <img src={logoTime} width="100px" height="100px" />
            </div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: '15px'}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Log In</h2>
                                    <form>
                                        <div className="mb-4">
                                            <label htmlFor="form3Example3cg">Your Email</label>
                                            <input type="text" id="form3Example3cg"
                                                   className="form-control form-control-lg"
                                                   onChange={e => setEmail(e.target.value)}
                                                   placeholder="Email"
                                                   value={email}/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="form3Example4cg">Password</label>
                                            <input type="password" id="form3Example4cg"
                                                   className="form-control form-control-lg"
                                                   onChange={e => setPassword(e.target.value)}
                                                   placeholder="Password"
                                                   value={password}/>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={() => store.login(email, password)}>
                                                Login
                                            </button>
                                        </div>

                                        <p className="separatorOr">OR</p>

                                        <Link to="/registration">
                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-3 text-body">
                                                    Register
                                                </button>
                                            </div>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default observer(LoginForm);