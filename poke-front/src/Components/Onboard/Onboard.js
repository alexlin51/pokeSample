import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import './Onboard.css';

export default function Onboard(props) {

    const [login, setLogin] = useState(true);
    const [userLog, setUserLog] = useState("");
    const updateULog = (e) => setUserLog(e.target.value);
    const [passLog, setPassLog] = useState("");
    const updatePLog = (e) => setPassLog(e.target.value);
    const [userReg, setUserReg] = useState("");
    const updateUReg = (e) => setUserReg(e.target.value);
    const [passReg, setPassReg] = useState("");
    const updatePReg = (e) => setPassReg(e.target.value);
    const [passRegAgain, setPassRegAgain] = useState("");
    const updatePRegAgain = (e) => setPassRegAgain(e.target.value);

    const [logErr, setLogErr] = useState(false);

    const loginPoke = async () => {
        setLogErr(false);
        if (userLog === "" || passLog === "") {
            setLogErr(true);
            return;
        }
        let request;
        try{
            request = await Axios.post("https://pokedextestapp.herokuapp.com/auth/login",{
                user: userLog,
                pass: passLog
            });
        } catch(err){
            console.log(err);
            setLogErr(true);
            return;
        }
        console.log(request.data.token);
        localStorage.setItem('pokeKey', request.data.token);
        window.location.replace("https://pokedextestapp.herokuapp.com/pokedex");
    }

    const [regErr, setRegErr] = useState(false);
    const regPoke = async () => {
        setRegErr(false);
        if (userReg === "" || passReg === "" || passReg !== passRegAgain) {
            console.log(userReg,passReg, passRegAgain)
            setRegErr(true);
            return;
        }
        let request;
        try{
            request = await Axios.post("https://pokedextestapp.herokuapp.com/auth/register", {
                user: userReg,
                pass: passReg
            });
        } catch(err){
            console.log(err);
            setRegErr(true);
            return;
        }
        toggleLogin();
    }

    const toggleSignup = () => {
        setLogin(false);
        setUserLog("");
        setPassLog("");
        setLogErr(false);
    }
    const toggleLogin = () => {
        setLogin(true);
        setUserReg("");
        setPassReg("");
        setPassRegAgain("");
        setRegErr(false);
    }

    return (
        <div className='onBoardBox'>
            {
                login ? (
                    <div className="onboardGrid">
                        <span className="onboardHeader">Login</span>
                        {
                            logErr ? (
                                <div>
                                    <span style={{ "color": "red"}}>Check inputs again. </span>
                                    <div style={{"height":"8px"}}/>
                                </div>
                            ) : null
                        }
                        <TextField label="Username" variant="outlined" value={userLog} onChange={updateULog}/>
                        <div style={{"height":"7px"}}/>
                        <TextField label="Password" variant="outlined" value={passLog} onChange={updatePLog} type="password"/>
                        <div style={{"height":"7px"}}/>
                        <Button variant="contained" color="primary" onClick={loginPoke}>
                            Login
                        </Button>
                        <div style={{"height":"10px"}}/>
                        <div className='onboardLink onboardSmall' onClick={toggleSignup}>Don't have account?</div>
                    </div>
                ) : ( 
                    <div className="onboardGrid">
                        <span className="onboardHeader">Sign up</span>
                        {
                            regErr ? (
                                <div>
                                    <span style={{ "color": "red"}}>Check inputs again. </span>
                                    <div style={{"height":"8px"}}/>
                                </div>
                            ) : null
                        }
                        <TextField label="Username" variant="outlined" value={userReg} onChange={updateUReg}/>
                        <div style={{"height":"7px"}}/>
                        <TextField label="Password" variant="outlined" value={passReg} onChange={updatePReg} type="password"/>
                        <div style={{"height":"7px"}}/>
                        <TextField label="Confirm Password" variant="outlined" value={passRegAgain} onChange={updatePRegAgain} type="password"/>
                        <div style={{"height":"7px"}}/>
                        <Button variant="contained" color="primary" onClick={regPoke}>
                            Register
                        </Button>
                        <div style={{"height":"10px"}}/>
                        <div className='onboardLink onboardSmall' onClick={toggleLogin}>Have an account?</div>
                    </div>
                )
            }
        </div>
    )
};
